import React from "react";
import useFetch from "../utils/useFetch";
import EmptyData from "./EmptyData";
import Loader from "./Loader";

function OrdersTable() {
  const userId = localStorage.getItem("userId");
  const role = localStorage.getItem("role");
  const { data, loading } = useFetch(
    role === "student" ? `order?userId=${userId}` : "order"
  );

  return (
    <div>
      {" "}
      {loading ? (
        <Loader />
      ) : data && data.length > 0 ? (
        <table className="table">
          <thead>
            <tr>
              {role === "business_owner" ? (
                <th className="fw-bold"> Username</th>
              ) : (
                <th className="fw-bold"> Item id</th>
              )}
              <th className="fw-bold"> Total price</th>
              <th className="fw-bold"> status</th>
              <th className="fw-bold"> date</th>
              <th className="fw-bold"> View Order</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map((x, i) => (
                <tr key={i}>
                  {role === "business_owner" ? (
                    <th> {x.user.name}</th>
                  ) : (
                    <th> {x.id}</th>
                  )}{" "}
                  <td>${x.totalCost}</td>
                  <td>{x.status}</td>
                  <td>{x?.created_at.split("T")[0]}</td>
                  <td>
                    <a href={`/order/${x.id}`}> View</a>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      ) : (
        <EmptyData />
      )}
    </div>
  );
}

export default OrdersTable;
