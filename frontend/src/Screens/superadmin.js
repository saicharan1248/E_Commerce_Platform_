import React, { useState } from "react";
import Chat from "../common/Chat";
import DashboardComponent from "../common/DashboardComponent";
import Loader from "../common/Loader";
import MediaPosts from "../common/MediaPosts";
import { Table } from "../common/Table";
import { logout } from "../utils/api";
import { getNavigation } from "../utils/hooks";
import useFetch from "../utils/useFetch";

function Superadmin(props) {
  if (!localStorage.getItem("token")) {
    window.location.href = "/";
  }

  if (localStorage.getItem("role") !== "super_admin") {
    getNavigation();
  }

  const [view, setView] = useState(0);

  const { data, loading, error, fetchFunc } = useFetch("users");
  if (error) {
    return <h4>Something went wrong, Please try again</h4>;
  }

  const onlyStudents = data ? data.filter((x) => x.role === "student") : [];
  const onlySchoolAdmin = data
    ? data.filter((x) => x.role === "school_admin")
    : [];

  const onlybusinessOwners = data
    ? data.filter((x) => x.role === "business_owner")
    : [];

  const tabs = [
    "Dashboard",
    "Manage School Admins",
    "Manage Students",
    "Chat",
    "Posts",
  ];

  return (
    <div>
      <div
        id="wrapper"
        className="container pt-4 d-flex justify-content-between align-items-center"
      >
        <h3>SUPER ADMIN</h3>
        <h3 role={"button"} onClick={() => logout()}>
          Logout
        </h3>
      </div>

      <hr className="my-2" />
      <div className="manage container mt-5">
        {tabs.map((x, i) => (
          <span
            onClick={() => setView(i)}
            key={i}
            className={`btn m-1 ${
              i === view ? "btn-secondary text-white" : "border"
            }`}
          >
            {x}
          </span>
        ))}

        <div className="mt-5">
          {loading ? (
            <Loader />
          ) : view === 0 ? (
            <div>
              <DashboardComponent
                cardData={[
                  { name: "School Admins", count: 12 },
                  { name: "Business Owners", count: 2 },
                  { name: "Students", count: 44 },
                ]}
              />
            </div>
          ) : view === 1 ? (
            <div>
              <h3>School Admins</h3>
              <Table
                role="school_admin"
                data={onlySchoolAdmin}
                fetchFunc={fetchFunc}
              />
            </div>
          ) : view === 2 ? (
            <div>
              <h3>Students List</h3>
              <Table role="student" data={onlyStudents} fetchFunc={fetchFunc} />
            </div>
          ) : // ) : view === 2 ? (
          //   <div>
          //     <h3>Business Owners List</h3>
          //     <Table data={onlybusinessOwners} />
          //   </div>
          view === 3 ? (
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

export default Superadmin;
