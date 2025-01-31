import React, { useState } from "react";
import { useParams } from "react-router";
import Select from "react-select";
import Loader from "../common/Loader";
import SellerNavbar from "../common/SellerNavbar";
import StudentNavbar from "../common/StudentNavbar";
import useFetch from "../utils/useFetch";
import usePost from "../utils/usePost";

const options = [
  { value: "Order Placed", label: "Order Placed" },
  { value: "In Transit", label: "In Transit" },
  { value: "Out for Delivery", label: "Out for Delivery" },
  { value: "Delivered", label: "Delivered" },
  { value: "Cancel", label: "Cancel" },
];

const OrderView = ({ data }) => {
  if (!data) {
    return;
  }

  return (
    <div>
      <div className="d-flex justify-content-between mt-3">
        <div className="col-3">
          <small className="text-secondary">Customer Name</small>
          <p>{data.user.name}</p>
        </div>

        <div className=" col-3">
          <small className="text-secondary">Phone</small>
          <p>{data.user.phone}</p>
        </div>

        <div className=" col-3">
          <small className="text-secondary">Order Status</small>
          <p>{data.status}</p>
        </div>
      </div>

      <table className="table table-hover table-responsive mt-4">
        <thead>
          <tr>
            <th className="fw-bold">Item Name</th>
            <th className="fw-bold">Quantity</th>
            <th className="fw-bold">Cost</th>
          </tr>
        </thead>
        <tbody>
          {data.products.map((x, i) => (
            <tr key={i}>
              <th scope="row">{x.title}</th>
              <td>
                {data.quantities[i]} X ${x.cost}
              </td>
              <td> $ {data.quantities[i] * x.cost}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="col-11 d-flex justify-content-end">
        Total Cost : ${data.totalCost}
      </div>
    </div>
  );
};

function BusinessOwnerOrderView() {
  const userId = localStorage.getItem("userId");
  const role = localStorage.getItem("role");
  const params = useParams();
  const { data, loading, fetchFunc } = useFetch(`order/${params.id}`);
  const { callFunc } = usePost();
  const [status, setStatus] = useState(null);

  const changeStatus = () => {
    const body = {
      userId,
      products: JSON.stringify(data.products.map((x) => x.id)),
      quantities: JSON.stringify(data.quantities),
      totalCost: data.totalCost,
      status: status.value,
    };
    callFunc(`order/${params.id}`, "POST", body);
    fetchFunc();
  };

  return (
    <div>
      {role === "student" ? <StudentNavbar /> : <SellerNavbar />}
      <hr className="my-1" />

      <div className="container col-6 mt-5">
        <div className="mt-4">
          {loading ? (
            <Loader />
          ) : (
            <div>
              <div className="d-flex justify-content-between mb-4">
                <h4> Order Details #{params.id}</h4>
                <h6>{data?.created_at.split("T")[0]}</h6>
              </div>
              <OrderView data={data} />
              {role === "business_owner" && data?.status !== "Delivered" && (
                <div>
                  <h6 className="mt-5">Take Action</h6>
                  <div className="col-12 col-md-4">
                    <Select
                      options={options}
                      defaultValue={
                        status || { label: data?.status, value: data?.status }
                      }
                      onChange={(e) => setStatus(e)}
                    />
                    <button
                      onClick={changeStatus}
                      disabled={loading}
                      className="btn btn-primary px-5 py-2 w-100 mt-3"
                    >
                      {loading ? "Please wait.." : "Submit"}
                    </button>{" "}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default BusinessOwnerOrderView;
