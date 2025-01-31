import React from "react";
import OrdersTable from "../common/OrdersTable";
import SellerNavbar from "../common/SellerNavbar";

function Orders() {
  return (
    <div>
      {" "}
      <SellerNavbar />
      <hr className="my-1" />
      <div className="container col-6 mt-5">
        <h3>Orders</h3>
        <OrdersTable />
      </div>
    </div>
  );
}

export default Orders;
