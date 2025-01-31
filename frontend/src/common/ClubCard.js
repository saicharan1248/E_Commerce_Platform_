import React from "react";
import usePost from "../utils/usePost";

function ClubCard({ x, i, fetchFunc }) {
  const { callFunc } = usePost();

  const btnText = (y) => {
    if (y.users) {
      return String(y.userId) === userId || role === "school_admin"
        ? "DELETE"
        : y.users &&
          typeof y.users === "object" &&
          y.users.find((usr) => usr && String(usr.id) === userId)
        ? "Leave"
        : "+ Join";
    }
  };
  const userId = localStorage.getItem("userId");
  const role = localStorage.getItem("role");

  const JoinClub = (item) => {
    const users = item.users.map((x) => x.id);
    const body = {
      title: item.title,
      image: item.image,
      description: item.description,
      userId,
      users: JSON.stringify([...users, Number(userId)]),
      status: "Active",
    };
    callFunc(`club/${item.id}`, "POST", body);
    fetchFunc();
  };

  const LeaveClub = (item) => {
    const users = item.users
      .filter((x) => x.id !== Number(userId))
      .map((x) => x.id);
    const body = {
      title: item.title,
      image: item.image,
      description: item.description,
      userId,
      users: JSON.stringify(users),
      status: "Active",
    };
    callFunc(`club/${item.id}`, "POST", body);
    fetchFunc();
  };

  const DeleteClub = (item) => {
    callFunc(`club/${item.id}`);
    fetchFunc();
  };

  return (
    <div key={i} className="col-3">
      <div className="border p-3 m-2">
        {x.image && (
          <img
            style={{ width: "100%", height: "200px", objectFit: "cover" }}
            src={x.image}
            alt="image not available"
          />
        )}
        <h4>{x.title}</h4>
        <p className="mb-1 text-truncate"> {x.description}</p>
        {x.users ? (
          <button
            className="mt-2"
            onClick={() =>
              btnText(x) === "+ Join"
                ? JoinClub(x)
                : btnText(x) === "Leave"
                ? LeaveClub(x)
                : btnText(x) === "DELETE"
                ? DeleteClub(x)
                : null
            }
          >
            {btnText(x)}
          </button>
        ) : (
          <button className="mt-2">Learn more</button>
        )}
      </div>
    </div>
  );
}

export default ClubCard;
