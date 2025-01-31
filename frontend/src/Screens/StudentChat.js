import React from "react";
import Chat from "../common/Chat";
import StudentNavbar from "../common/StudentNavbar";
import Login from "./Login";

function StudentChat() {
  return (
    <div>
      {localStorage.getItem("userId") ? (
        <>
          <StudentNavbar />
          <hr className="my-1" />
          <div className="container col-12 col-md-10">
            <Chat />
          </div>
        </>
      ) : (
        <Login page="Chat" />
      )}
    </div>
  );
}

export default StudentChat;
