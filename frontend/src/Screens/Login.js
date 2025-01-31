import React, { useState } from "react";
import "../assets/css/main.css";
import { useNavigate, NavLink } from "react-router-dom";
import Navbar from "../common/Navbar";
import apiClient from "../utils/api";
import { getNavigation } from "../utils/hooks";
import { toast } from "react-toastify";

export default function Login({ page }) {
  const navigate = useNavigate();
  const [radioState, changeState] = useState(null);
  const [userState, setUserState] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = React.useState(false);

  const LoginAction = async () => {
    if (!userState || !password) {
      return;
    }

    setLoading(true);
    try {
      const response = await apiClient({
        URL: "login",
        METHOD: "POST",
        BODY: { email: userState, password },
      });
      toast[response.status === 200 ? "success" : "error"](response.message);
      if (response.status === 200) {
        // getNavigation(response.role)
        const { role, name, phone, email, id } = response.user;
        if (role === "student") {
          navigate("/Student");
        } else if (role === "business_owner") {
          navigate("/Seller");
        } else if (role === "school_admin") {
          navigate("/adminpage");
        } else if (role === "super_admin") {
          navigate("/superadmin");
        }

        localStorage.setItem("token", response.token);
        localStorage.setItem("userId", id);
        localStorage.setItem("role", role);
        localStorage.setItem("name", name);
        localStorage.setItem("phone", phone);
        localStorage.setItem("email", email);
      }
    } catch (error) {
      setLoading(false);
      if (error && error.message) {
        toast.error(error.message);
      } else {
        toast.error("something went wrong please try again");
      }
    }
    setLoading(false);
  };

  return (
    <div id="wrapper" className="divided">
      <Navbar />

      <section className="banner style1">
        <div className="content">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              LoginAction();
            }}
          >
            <div className="fields">
              <div className="field half">
                <label htmlFor="name">Username</label>
                <input
                  type="email"
                  name="name"
                  placeholder="Email Address"
                  id="name"
                  value={userState}
                  onChange={(e) => setUserState(e.target.value)}
                />
              </div>
              <div className="field half">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  id="password"
                  minLength={8}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <button disabled={loading} type="submit">
              {loading ? "Please wait.." : "Login"}
            </button>
          </form>
          <NavLink to="/Forgotpassword">forgot password</NavLink>
          <br />
          <NavLink to="/Register">Don't have an account? Register</NavLink>
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
