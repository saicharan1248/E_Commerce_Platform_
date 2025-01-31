import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/css/main.css";
import Navbar from "../common/Navbar";
import usePost from "../utils/usePost";

export default function Forgotpassword() {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const { callFunc } = usePost();

  const submitEmail = () => {
    const body = {
      email,
    };
    callFunc(`forgot-password`, "POST", body);
    setShow(!show);
  };

  return (
    <div id="wrapper" className="divided">
      <Navbar />

      <section className="banner style1">
        {show ? (
          <div className="container">
            <div className="mx-auto col-md-8 col-10 border rounded shadow p-3 my-5">
              <h4 className="text-primary">
                {" "}
                A Verification link has been sent to your email account
              </h4>
              <hr className="my-0" />
              <p className="mt-3">
                Please click on the link that has just been sent to your email
                account to verify your email and continue the registration
                process
              </p>
            </div>
          </div>
        ) : (
          <div className="content">
            <h3>Forgot Password?</h3>
            <form>
              <div className="fields">
                <div className="field half">
                  <label htmlFor="name">Type Your Email Address</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    id="name"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              <button disabled={!email} onClick={() => submitEmail()}>
                Reset Password
              </button>
            </form>
          </div>
        )}
      </section>

      <footer className="wrapper style1 align-center">
        <div className="inner">
          <p>&copy; Student market place, Inc.</p>
        </div>
      </footer>
    </div>
  );
}
