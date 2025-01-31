import React, { useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import "../assets/css/main.css";
import Navbar from "../common/Navbar";
import usePost from "../utils/usePost";

export default function Createpassword() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [cpassword, setcpassword] = useState("");
  const params = useLocation();
  const { pathname, search } = params;
  const token = search.split("=")[1];

  const { callFunc } = usePost();

  const CreatePasswordAction = (e) => {
    e.preventDefault();
    callFunc(
      `${pathname}?token=${token}&email=${email}&password=${password}&password_confirmation=${password}`,
      "POST",
      {}
    );
  };

  return (
    <div id="wrapper" className="divided">
      <Navbar />

      <section className="banner style1">
        <div className="content">
          <h3>Create new Password</h3>
          <form>
            <div className="fields">
              <div className="field half">
                <label htmlFor="name">Enter Email</label>
                <input
                  type="email"
                  placeholder="Enter Email"
                  id="name"
                  value={email}
                  onChange={(e) => setemail(e.target.value)}
                />
              </div>
              <div className="field half">
                <label htmlFor="name">Enter your New password</label>
                <input
                  type="password"
                  placeholder="Enter password"
                  id="name"
                  value={password}
                  minLength={8}
                  onChange={(e) => setpassword(e.target.value)}
                />
              </div>
              <div className="field half">
                <label htmlFor="name">Confirm password</label>
                <input
                  type="password"
                  placeholder="confirm password"
                  id="name"
                  value={cpassword}
                  minLength={8}
                  onChange={(e) => setcpassword(e.target.value)}
                />
              </div>
            </div>

            <button onClick={(e) => CreatePasswordAction(e)}>Submit </button>
          </form>
        </div>
      </section>

      <footer className="wrapper style1 align-center">
        <div className="inner">
          <p>&copy; Student market place, Inc.</p>
        </div>
      </footer>
    </div>
  );
}
