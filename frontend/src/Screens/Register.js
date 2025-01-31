import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Navbar from "../common/Navbar";
import apiClient from "../utils/api";

export default function Register() {
  const navigate = useNavigate();
  const [userState, setUserState] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = React.useState(false);

  const RegisterAction = async () => {
    if (!userState || !name || !password) {
      return;
    }

    if (password && password !== confirmPassword) {
      toast["error"]("Password mismatch, Please check password");
    }

    setLoading(true);
    try {
      const response = await apiClient({
        URL: "register",
        METHOD: "POST",
        BODY: {
          name,
          email: userState,
          password: password,
          phone: "9449449444",
          role: "student",
        },
      });
      toast[response.status === 200 ? "success" : "error"](response.message);
      if (response) {
        navigate("/login");
      }
    } catch (error) {
      if (error && error.message) {
        toast.error(error.message);
      } else {
        toast.error("something went wrong please try again");
      }
    }
    setLoading(false);
  };

  return (
    <div>
      {/* <!-- Wrapper --> */}
      <div id="wrapper" className="divided">
        <Navbar />

        <section className="banner style1"></section>

        {/* <!-- Form --> */}
        <section className="banner style1">
          <div className="content">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                RegisterAction();
              }}
            >
              <div className="fields">
                <div className="field half">
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder=" Enter Full Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="field half">
                  <label htmlFor="name">Email</label>
                  <input
                    type="email"
                    name="name"
                    id="name"
                    placeholder=" Enter Email address"
                    value={userState}
                    onChange={(e) => setUserState(e.target.value)}
                  />
                </div>
                <div className="field half">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    minLength={8}
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="field half">
                  <label htmlFor="password"> Confirm Password</label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    minLength={8}
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </div>
              </div>

              <ul className="actions">
                <div className="content">
                  <button
                    // onClick={() => {
                    //   if (confirmPassword !== password) {
                    //     alert("Confirm password should be same as password");
                    //   } else if (radioState === "Register as Student") {
                    //     localStorage.setItem("username", userState);
                    //     navigate("/Student");
                    //   } else if (radioState === "Register as Admin") {
                    //     localStorage.setItem("username", userState);
                    //     navigate("/adminpage");
                    //   } else if (radioState === "Register as Super Admin") {
                    //     localStorage.setItem("username", userState);
                    //     navigate("/superadmin");
                    //   } else if (radioState === "Register as BusinessOwner") {
                    //     localStorage.setItem("username", userState);
                    //     navigate("/Seller");
                    //   }
                    // }}
                    type="submit"
                  >
                    {loading ? "Please wait.." : "Register"}
                  </button>
                  <label htmlFor="name" className="mt-4">
                    Already have an account ?{" "}
                  </label>
                  <button onClick={() => navigate("/login")} type="submit">
                    {loading ? "Please wait.." : "log In"}
                  </button>
                </div>
              </ul>
            </form>
          </div>
        </section>
      </div>

      {/* < !--Footer --> */}
      <footer className="wrapper style1 align-center">
        <div className="inner">
          <p>&copy; Student market place, Inc.</p>
        </div>
      </footer>
    </div>
  );
}
