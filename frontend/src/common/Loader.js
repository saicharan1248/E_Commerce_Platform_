import React from "react";

function Loader() {
  return (
    <div className="container col-6 text-center mt-5">
      <div className="spinner-border m-5" role="status">
        <span className="sr-only"></span>
      </div>
    </div>
  );
}

export default Loader;
