import React from "react";
import "../assets/css/main.css";
import Chat from "../common/Chat";
import DashbaordComponent from "../common/DashboardComponent";
import Loader from "../common/Loader";
import MediaPosts from "../common/MediaPosts";
import { Table } from "../common/Table";
import { logout } from "../utils/api";
import { getNavigation } from "../utils/hooks";
import useFetch from "../utils/useFetch";
import Club from "./Club";
function Adminpage() {
  if (!localStorage.getItem("token")) {
    window.location.href = "/";
  }

  if (localStorage.getItem("role") !== "school_admin") {
    getNavigation();
  }

  const [view, setView] = React.useState(0);

  const { data, loading, error } = useFetch("users");
  if (error) {
    return <h4>Something went wrong, Please try again</h4>;
  }

  const onlyStudents = data ? data.filter((x) => x.role === "student") : [];

  const onlybusinessOwners = data
    ? data.filter((x) => x.role === "business_owner")
    : [];

  const tabs = [
    "Dashboard",
    "Manage Students",
    "Manage Business Owners",
    "Clubs",
    "Chat",
    "Posts",
  ];

  return (
    <div>
      {/* <!-- Wrapper --> */}
      <div
        id="wrapper"
        className="container pt-4 d-flex justify-content-between align-items-center"
      >
        <h3 className="mb-0">ADMIN VIEW</h3>
        <h3 className="mb-0" role={"button"} onClick={() => logout()}>
          Logout
        </h3>
      </div>
      <hr className="my-2" />
      <div className="container mt-5">
        {tabs.map((x, i) => (
          <span
            onClick={() => setView(i)}
            key={i}
            className={`btn m-1 ${
              i === view ? "bg-secondary text-white" : "border"
            }`}
          >
            {x}
          </span>
        ))}

        <div className="mt-5">
          {loading ? (
            <Loader />
          ) : view === 0 ? (
            <div className="container mt-5">
              <DashbaordComponent />
            </div>
          ) : view === 1 ? (
            <div>
              <h3>Students List</h3>
              <Table data={onlyStudents} />
            </div>
          ) : view === 2 ? (
            <div>
              <h3>Business Owners List</h3>
              <Table data={onlybusinessOwners} />
            </div>
          ) : view === 3 ? (
            <Club hideNavbar={true} />
          ) : view === 4 ? (
            <Chat />
          ) : (
            <MediaPosts />
          )}
        </div>
      </div>

      {/* <!-- Footer --> */}
      <footer className="wrapper style1 align-center">
        <div className="inner">
          <p>&copy; Student market place, Inc.</p>
        </div>
      </footer>
    </div>
  );
}

export default Adminpage;
