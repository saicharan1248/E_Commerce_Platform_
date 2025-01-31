import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./Screens/Home";
import Cart from "./Screens/Cart";
import Services from "./Screens/Services";
import Login from "./Screens/Login";
import Register from "./Screens/Register";
import Aboutcontact from "./Screens/Aboutcontact";
import Forgotpassword from "./Screens/Forgotpassword";
import Student from "./Screens/Student";
import Club from "./Screens/Club";
import Ads from "./Screens/Posts";
import AdminPage from "./Screens/Adminpage";
import SuperAdmin from "./Screens/superadmin";
import Market from "./Screens/Market";
import Seller from "./Screens/Seller";
import Products from "./Screens/Products";
import OrderView from "./Screens/OrderView";
import Orders from "./Screens/Orders";
import SellerChat from "./Screens/SellerChat";
import StudentChat from "./Screens/StudentChat";
import StudentMediaPosts from "./Screens/StudentMediaPosts";
import SellerMediaPosts from "./Screens/SellerMediaPosts";
import StudentDashboard from "./Screens/StudentDashboard";
import Createpassword from "./Screens/CreatePassword";
import Advertisements from "./Screens/Advertisements";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/Cart" element={<Cart />} exact />
        <Route path="/order/:id" element={<OrderView />} exact />
        <Route path="/orders" element={<Orders />} exact />
        <Route path="/Services" element={<Services />} exact />
        <Route path="/Login" element={<Login />} exact />
        <Route path="/Aboutcontact" element={<Aboutcontact />} exact />
        <Route path="/Register" element={<Register />} exact />
        <Route path="/Forgotpassword" element={<Forgotpassword />} exact />
        <Route path="/Student" element={<StudentDashboard />} />
        <Route path="/profile" element={<Student />} />
        <Route path="/Club" element={<Club />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/Ads" element={<Ads />} />
        <Route path="/AdminPage" element={<AdminPage />} />
        <Route path="/SuperAdmin" element={<SuperAdmin />} />
        <Route path="/Market" element={<Market />} />
        <Route path="/Seller" element={<Seller />} />
        <Route path="/Chat" element={<SellerChat />} exact />
        <Route path="/student-chat" element={<StudentChat />} exact />
        <Route path="/media-posts" element={<StudentMediaPosts />} exact />
        <Route path="/reset-password" element={<Createpassword />} exact />
        <Route path="/advertisements" element={<Advertisements />} exact />
        <Route
          path="/seller-media-posts"
          element={<SellerMediaPosts />}
          exact
        />
      </Routes>
    </Router>
  );
}

export default App;
