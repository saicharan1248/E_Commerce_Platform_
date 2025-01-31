import React from "react";
import Chat from "../common/Chat";
import SellerNavbar from "../common/SellerNavbar";
import Login from "./Login";

function SellerChat() {
  return (
    <div>
      {localStorage.getItem("userId") ? (
        <>
          <SellerNavbar />
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

export default SellerChat;
