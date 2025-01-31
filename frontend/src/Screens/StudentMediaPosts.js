import React from "react";
import MediaPosts from "../common/MediaPosts";
import StudentNavbar from "../common/StudentNavbar";

function StudentMediaPosts() {
  return (
    <div id="wrapper">
      <StudentNavbar />
      <hr className="my-2" />
      <MediaPosts />
    </div>
  );
}

export default StudentMediaPosts;
