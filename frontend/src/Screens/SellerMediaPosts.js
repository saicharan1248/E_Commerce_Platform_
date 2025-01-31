import React from "react";
import MediaPosts from "../common/MediaPosts";
import SellerNavbar from "../common/SellerNavbar";

function SellerMediaPosts() {
  return (
    <div id="wrapper">
      <SellerNavbar />
      <hr className="my-2" />
      <MediaPosts />
    </div>
  );
}

export default SellerMediaPosts;
