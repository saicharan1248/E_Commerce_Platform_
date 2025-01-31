import React from "react";
import AdCard from "../common/AdCard";
import DashboardComponent from "../common/DashboardComponent";
import EmptyData from "../common/EmptyData";
import Loader from "../common/Loader";
import SellerNavbar from "../common/SellerNavbar";
import img1 from "../images/profile.png";
import useFetch from "../utils/useFetch";
import usePost from "../utils/usePost";

function Seller() {
  const userId = localStorage.getItem("userId");
  const name = localStorage.getItem("name");
  const phone = localStorage.getItem("phone");
  const email = localStorage.getItem("email");

  if (!userId) {
    window.location.href = "/";
  }

  return (
    <div>
      {/* <!-- Wrapper --> */}
      <div id="wrapper">
        <SellerNavbar />
        <hr className="m-0" />

        <div className="mt-5 container h-50 d-flex flex-wrap">
          <div className="col-4">
            <div className="card p-3 text-center ">
              <div className="d-flex justify-content-center">
                <img src={img1} alt="user" width="100" />
              </div>
              <h4 className="mb-2">{name}</h4>
              <p className="mb-1">{email}</p>
              <p className="mb-1">{phone}</p>
            </div>
          </div>
        </div>
        <DashboardComponent />
      </div>
    </div>
  );
}

export default Seller;
