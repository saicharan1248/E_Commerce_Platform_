import React from "react";
import Login from "./Login";
import "../assets/css/posts.css";
import SellerNavbar from "../common/SellerNavbar";
import StudentNavbar from "../common/StudentNavbar";

function Posts() {
  const role = localStorage.getItem("role");
  return (
    <div>
      {localStorage.getItem("userId") ? (
        <>
          {role === "student" ? <StudentNavbar /> : <SellerNavbar />}
          <hr className="m-0" />
          <div className="container mt-4">
            <div className="d-flex justify-content-between align-items-center">
              <h2>Blogs</h2>
            </div>

            <div className="w-100 border border-dark position-relative iframe-loader posts-height">
              <iframe
                src="https://www.sxp6773.uta.cloud/mercado_escolar_blog/"
                title="Mercado Escolar Blogs"
                width={"100%"}
                height={"100%"}
              ></iframe>
            </div>
          </div>
        </>
      ) : (
        <Login page="Ads" />
      )}
    </div>
  );
}

export default Posts;
