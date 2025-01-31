import React, { useState } from "react";
import "../assets/css/main.css";
import { useNavigate } from "react-router-dom";
import img5 from "../images/image5.png";
import img6 from "../images/image6.jpg";
import img7 from "../images/image7.jpg";
import Navbar from "../common/Navbar";

export default function Aboutcontact() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();
  return (
    <>
      {/* <!-- Wrapper --> */}
      <div id="wrapper" className="divided">
        <Navbar />

        {/* <!-- Images --> */}
        <section className="wrapper style1">
          <div className="inner">
            <span className="image fit">
              <img src={img5} alt="" />
            </span>

            <p>
              <span className="image left">
                <img src={img6} alt="" />
              </span>
              Currently the website in basic so the capacity is going to be
              average of 100 members like a group of students can buy the
              products. In this market place we can add some many features like
              we can add the AR view which is very useful for the item review
              which can be visible in 3D form.{" "}
            </p>

            <p>
              <span className="image right">
                <img src={img7} alt="" />
              </span>
              we have many student offers to offer that can be useful for many
              new coming students and also our products are high quality in
              nature we got additional deals for prime customers, that can be
              easy obtain if u add more than 15 clubs.
            </p>
          </div>
        </section>

        {/* <!-- Form --> */}
        <section className="banner style1">
          <div className="content">
            <form>
              <div className="fields">
                <div className="field half">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="field half">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="field">
                  <label htmlFor="department">Department</label>
                  <select name="department" id="department">
                    <option value="">- Category -</option>
                    <option value="1">Manufacturing</option>
                    <option value="2">Shipping</option>
                    <option value="3">Admin</option>
                  </select>
                </div>
                <div className="field">
                  <label htmlFor="message">Message</label>
                  <textarea name="message" id="message" rows="6"></textarea>
                </div>
                <div className="field half">
                  <input type="checkbox" id="copy" name="copy" />
                  <label htmlFor="copy">Email me a copy of this message</label>
                </div>
              </div>
              <ul className="actions">
                <li>
                  <button
                    type="submit"
                    onClick={() => {
                      alert("Your message sent successfully");
                      navigate("/Aboutcontact");
                    }}
                  >
                    Send Message
                  </button>
                </li>
              </ul>
            </form>
          </div>
        </section>

        {/* <!-- Footer --> */}
        <footer className="wrapper style1 align-center">
          <div className="inner">
            <p>&copy; Student market place, Inc.</p>
          </div>
        </footer>
      </div>
    </>
  );
}
