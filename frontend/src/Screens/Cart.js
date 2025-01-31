import React from "react";
import { useNavigate } from "react-router-dom";
import Login from "./Login";
import "../assets/css/main.css";
import StudentNavbar from "../common/StudentNavbar";
import usePost from "../utils/usePost";
import useFetch from "../utils/useFetch";
import Loader from "../common/Loader";

export default function Cart() {
  const navigate = useNavigate();
  const userId = localStorage.getItem("userId");
  const { data, loading, fetchFunc } = useFetch(`cart/${userId}`);
  const { callFunc } = usePost();

  if (!localStorage.getItem("userId")) {
    return <Login page="Cart" />;
  }

  const createOrder = () => {
    const body = {
      userId: Number(userId),
      products: JSON.stringify(data.map((x) => x.productId)),
      quantities: JSON.stringify(data.map((x) => x.quantity)),
      totalCost: getTotal(),
      status: "Order Placed",
    };
    callFunc("order", "POST", body);
    data.map((x) => {
      callFunc(`cart/${x.id}`);
    });
    navigate("/profile");
  };

  const getTotal = () => {
    const items = [...data];
    if (items) {
      return Math.round(
        items.reduce((a, b) => {
          return a + b.product.cost;
        }, 0)
      );
    }
  };

  return (
    <div id="wrapper">
      <StudentNavbar />
      <hr className="my-1" />
      <div className="container col-md-6 col-12 py-5">
        <h3>CART</h3>
        <ul class="list-group">
          {loading ? (
            <Loader />
          ) : data && data.length > 0 ? (
            data.map((x, i) => (
              <div
                key={i}
                class="list-group-item d-flex justify-content-between align-items-center"
              >
                <div className="col-4">
                  {x.product.title} X {x.quantity}
                </div>
                <div className="col-4 text-center">${x.product.cost}</div>
                <div className="col-4 d-flex justify-content-end">
                  <span
                    role="button"
                    onClick={() => {
                      callFunc(`cart/${x.id}`);
                      fetchFunc();
                    }}
                    className="badge bg-danger rounded-pill"
                  >
                    Remove
                  </span>
                </div>
              </div>
            ))
          ) : (
            "Cart is empty"
          )}
        </ul>
        <hr />
        <section id="Total">
          <div className="d-flex">
            <h4 className="col-4">Total</h4>
            <h4 className="col-4 text-center">
              {data && data?.length} (Items), ${" "}
              {data && data.length > 0 ? getTotal() : 0}
            </h4>
          </div>
          <form className="mt-4">
            <button
              disabled={loading || (data && data.length === 0)}
              type="button"
              className="button_1"
              onClick={() => createOrder()}
            >
              checkout
            </button>
            <button
              onClick={() => navigate("/products")}
              type="button"
              className="button_1 mx-4"
            >
              Continue Shopping
            </button>
          </form>
        </section>
      </div>
    </div>
  );
}
