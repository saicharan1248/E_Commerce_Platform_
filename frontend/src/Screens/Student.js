import React from "react";
import imga from "../images/profile.png";
import "../assets/css/main.css";
import StudentNavbar from "../common/StudentNavbar";
import OrdersTable from "../common/OrdersTable";
import Loader from "../common/Loader";

export default function Student() {
  const name = localStorage.getItem("name");
  const phone = localStorage.getItem("phone");
  const email = localStorage.getItem("email");
  return (
    <>
      {/* <!-- Wrapper --> */}
      <div id="wrapper">
        <StudentNavbar />
        <hr className="my-0" />
        <div className="wrapper container col-10 col-md-8 pt-5 d-flex flex-wrap">
          <div>
            <div>
              <img src={imga} alt="user" width="100" />
              <h4 className="mb-1">{name}</h4>
            </div>
            <div className="d-flex">
              <h4 className="mb-1">Email : </h4>
              <p className="mb-1">{email}</p>
            </div>
            <div className="d-flex">
              <h4>Phone : </h4>
              <p>{phone}</p>
            </div>
          </div>
          <div className="mx-4">
            <h4>My Orders</h4>

            <OrdersTable />
          </div>
        </div>
      </div>
      <div>
        {/* <!-- Footer --> */}
        <footer className="wrapper"></footer>
      </div>
    </>
  );
}
