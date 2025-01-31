import React from "react";
import "../assets/css/main.css";
import img1 from "../images/image1.jpeg";
import img4 from "../images/image4.jpg";
import { useNavigate } from "react-router-dom";
import Navbar from "../common/Navbar";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div id="wrapper" className="divided">
      <Navbar />

      <section className="banner style1">
        <div className="content">
          <h1>Welcome to Mercado Escolar</h1>
          <p className="major">
            With over 30 years of experience, we have a lot of products which
            are branded with all certifications passed and our website is still
            growing and maximizing it's profit termendously
          </p>
          <ul className="actions stacked">
            <li>
              <button
                onClick={() => navigate("/Services")}
                className="button big wide smooth-scroll-middle"
              >
                Our Services
              </button>
            </li>
          </ul>
        </div>
        <div className="image">
          <img src={img1} alt="" />
        </div>
      </section>

      <section className="wrapper  style1 align-center">
        <div className="inner">
          <div className="items style1 medium styleonscroll-fade-in">
            <section className="content-innner">
              <span className="icon  major fa-file"></span>
              <h3>Amazing Deals</h3>
              <p>
                Without going outside and just by click of button your favorite
                items can be delivered to your home, No need to travel some many
                miles for shopping malls. MERCADO ESCOLAR present all your
                dreams to you in a blink of an eye.
              </p>
            </section>
            <section>
              <span className="icon solid  major fa-users"></span>
              <h3>Student Offers</h3>
              <p>
                Also there are clubs which a customers can join the community
                which they are interested in and that way customers can interact
                with each other through the clubs. As for business owner who
                selling the products for us, they are also involved in these
                clubs to know about customers interested in products.
              </p>
            </section>
            <section>
              <span className="icon  solid  major fa-map"></span>
              <h3>Best Clubs</h3>
              <p>
                {" "}
                other through the clubs. As for business owner who selling the
                products for us, they are also involved in these clubs to know
                about customers interested in products.
              </p>
            </section>
          </div>
        </div>
      </section>

      <section
        className="spotlight style1 orient-right content-align-left image-position-center onscroll-image-fade-in"
        id="first"
      >
        <div className="content">
          <h2>Reach Us Out and Check Our Blog </h2>
          <p>
            you can reach us out through our blog{" "}
            <a href="https://www.sxp6773.uta.cloud/mercado_escolar_blog/">
              BLOG
            </a>
          </p>
          <ul className="actions stacked">
            <li>
              <button
                onClick={() => navigate("/Aboutcontact")}
                className="button"
              >
                Contact Us
              </button>
            </li>
          </ul>
        </div>
        <div className="image">
          <img src={img4} alt="" />
        </div>
      </section>
      {/* <div className="get-links">
        <button
          onClick={() => {
            navigate("/Login");
          }}
          className="button primary fit small"
          style={{ margin: "0 1.5px" }}
        >
          School Admin
        </button>
        <button
          onClick={() => {
            navigate("/Login");
          }}
          className="button primary fit small"
          style={{ margin: "0 1.5px" }}
        >
          Super Admin
        </button>
        <button
          onClick={() => {
            navigate("/Login");
          }}
          className="button primary fit small"
          style={{ margin: "0 1.5px" }}
        >
          Login
        </button>
        <button
          onClick={() => {
            navigate("/Ads");
          }}
          className="button primary fit small"
          style={{ margin: "0 1.5px" }}
        >
          Adver
        </button>
        <button
          onClick={() => {
            navigate("/Cart");
          }}
          className="button primary fit small"
          style={{ margin: "0 1.5px" }}
        >
          Cart
        </button>
        <button
          onClick={() => {
            navigate("/Club");
          }}
          className="button primary fit small"
          style={{ margin: "0 1.5px" }}
        >
          Club
        </button>
        <button
          onClick={() => {
            navigate("/Market");
          }}
          className="button primary fit small"
          style={{ margin: "0 1.5px" }}
        >
          Market
        </button>
        <button
          onClick={() => {
            navigate("/Login");
          }}
          className="button primary fit small"
          style={{ margin: "0 1.5px" }}
        >
          BusinessOwner
        </button>
      </div> */}

      <footer className="wrapper  align-center">
        {/* <div className="chat-button">
          <button
            onClick={() => {
              navigate("/Chat");
            }}
            className="button primary fit small"
          >
            Chat
          </button>
        </div> */}
        <div className="inner pt-3">
          <p>&copy; Student market place, Inc.</p>
        </div>
      </footer>
    </div>
  );
}
