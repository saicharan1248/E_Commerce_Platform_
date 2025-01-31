import React from "react";
import { useNavigate } from "react-router-dom";
import { logout } from "../utils/api";
import { UserNavigate } from "../utils/helpers";

function Navbar() {
  const navigate = useNavigate();
  return (
    <section className="banner d-flex align-items-center">
      <h3
        onClick={() => navigate("/")}
        role={"button"}
        className="col-6 mx-3 mb-0"
      >
        Mercado Escolar
      </h3>

      <div className="content col-6">
        <ul className="actions fit small">
          <li>
            <button
              onClick={() => navigate("/Services")}
              className="button primary fit small"
            >
              Service
            </button>
          </li>
          <li>
            <button
              onClick={() => navigate("/Aboutcontact")}
              className="button primary fit small"
            >
              About & Contact
            </button>
          </li>

          {localStorage.getItem("userId") ? (
            <>
              <li>
                <button
                  onClick={() => UserNavigate()}
                  className="button primary fit small"
                >
                  Dashboard
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
            </>
          ) : (
            <>
              <li>
                <button
                  onClick={() => navigate("/Login")}
                  className="button primary fit small"
                >
                  LogIn
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate("/Register")}
                  className="button primary fit small"
                >
                  Register
                </button>
              </li>
            </>
          )}
        </ul>
      </div>
    </section>
  );
}

export default Navbar;
