import React, { useState } from "react";
import useFetch from "../utils/useFetch";
import usePost from "../utils/usePost";
import EmptyData from "./EmptyData";
import Loader from "./Loader";

function MediaPosts() {
  const [message, setMessage] = useState("");
  const { data, loading, fetchFunc } = useFetch("post");
  const { callFunc } = usePost();
  const userId = localStorage.getItem("userId");
  const role = localStorage.getItem("role");

  const createPost = () => {
    if (message) {
      const body = {
        content: message,
        userId,
      };
      callFunc("post", "POST", body);
      setMessage("");
      fetchFunc();
    }
  };

  const deletePost = (id) => {
    callFunc(`post/${id}`);
    setMessage("");
    fetchFunc();
  };

  return (
    <div id="wrapper">
      <div className="wrapper container col-10 col-md-6 pt-5 d-flex align-items-center flex-wrap">
        <div className="col-12">
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="form-control"
            placeholder="Write something here.."
          ></textarea>{" "}
        </div>
        <span
          onClick={() => createPost()}
          type="submit"
          className="btn btn-primary px-5 mt-1 mb-4"
        >
          Submit
        </span>{" "}
        {loading ? (
          <Loader />
        ) : data && data.length > 0 ? (
          data.map((x, i) => (
            <div key={i} className="border rounded p-3 mb-3 w-100">
              <div className="d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center">
                  <div
                    className="bg-secondary"
                    style={{ height: 45, width: 45, borderRadius: 50 }}
                  ></div>
                  <div className="mx-2">
                    <h5 className="mb-0">{x.user.name}</h5>
                    <small style={{ fontSize: 12 }}>
                      {new Date(x.created_at).toLocaleString()}
                    </small>
                  </div>
                </div>
                {(userId === String(x.userId) ||
                  role === "super_admin" ||
                  role === "school_admin") && (
                  <span
                    onClick={() => deletePost(x.id)}
                    type="submit"
                    className="btn btn-light border px-2 mt-1 mb-4"
                  >
                    🗑️
                  </span>
                )}
              </div>
              <hr className="my-2" />
              <div className="w-100">{x.content}</div>
            </div>
          ))
        ) : (
          <EmptyData />
        )}
      </div>
    </div>
  );
}

export default MediaPosts;
