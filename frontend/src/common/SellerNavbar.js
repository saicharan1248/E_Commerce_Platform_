import React from "react";
import { useNavigate } from "react-router-dom";
import { logout } from "../utils/api";
import { getNavigation } from "../utils/hooks";

function SellerNavbar() {
  const navigate = useNavigate();

  if (!localStorage.getItem("token")) {
    window.location.href = "/";
  }

  if (localStorage.getItem("role") !== "business_owner") {
    getNavigation();
  }

  return (
    <section className="banner" style={{ display: "grid" }}>
      <div className="content">
        <ul className="actions fit small">
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
              onClick={() => navigate("/seller")}
              className="button primary fit small"
            >
              Dashboard
            </button>
          </li>

          <li>
            <button
              onClick={() => navigate("/Chat")}
              className="button primary fit small"
            >
              Chat
            </button>
          </li>

          <li>
            <button
              onClick={() => navigate("/Market")}
              className="button primary fit small"
            >
              Product Selling
            </button>
          </li>

          <li>
            <button
              onClick={() => navigate("/orders")}
              className="button primary fit small"
            >
              Orders
            </button>
          </li>

          <li>
            <button
              onClick={() => navigate("/advertisements")}
              className="button primary fit small"
            >
              Advertisements
            </button>
          </li>
          <li>
            <button
              onClick={() => navigate("/seller-media-posts")}
              className="button primary fit small"
            >
              Posts
            </button>
          </li>
          <li>
            <button
              onClick={() => logout()}
              className="button primary fit small"
            >
              logout
            </button>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default SellerNavbar;
