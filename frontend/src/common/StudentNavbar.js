import React from "react";
import { useNavigate } from "react-router-dom";
import { logout } from "../utils/api";
import { getNavigation } from "../utils/hooks";

function StudentNavbar() {
  const navigate = useNavigate();

  if (!localStorage.getItem("token")) {
    window.location.href = "/";
  }

  if (localStorage.getItem("role") !== "student") {
    getNavigation();
  }

  return (
    <div id="wrapper" className="divided">
      <section className="banner" style={{ display: "grid" }}>
        <div className="content">
          <ul className="actions fit small">
            {" "}
            <li>
              <button
                onClick={() => navigate("/")}
                className="button primary fit small"
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => navigate("/Student")}
                className="button primary fit small"
              >
                Dashboard
              </button>
            </li>
            <li>
              <button
                onClick={() => navigate("/Products")}
                className="button primary fit small"
              >
                Products
              </button>
            </li>
            <li>
              <button
                onClick={() => navigate("/Cart")}
                className="button primary fit small"
              >
                Cart
              </button>
            </li>
            <li>
              <button
                onClick={() => navigate("/Club")}
                className="button primary fit small"
              >
                Club
              </button>
            </li>
            <li>
              <button
                onClick={() => navigate("/ads")}
                className="button primary fit small"
              >
                Blogs
              </button>
            </li>
            <li>
              <button
                onClick={() => navigate("/media-posts")}
                className="button primary fit small"
              >
                Posts
              </button>
            </li>
            <li>
              <button
                onClick={() => navigate("/student-chat")}
                className="button primary fit small"
              >
                Chat
              </button>
            </li>
            <li>
              <button
                onClick={() => navigate("/profile")}
                className="button primary fit small"
              >
                Profile
              </button>
            </li>
            <li>
              <button
                onClick={() => logout()}
                className="button primary fit small"
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default StudentNavbar;
