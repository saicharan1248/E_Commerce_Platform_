import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Loader from "../common/Loader";
import apiClient from "../utils/api";
import useFetch from "../utils/useFetch";
import usePost from "../utils/usePost";

function Chat() {
  const senderId = localStorage.getItem("userId");
  const [usersData, setusersData] = useState([]);
  const [message, setMessage] = React.useState("");
  const { callFunc } = usePost();
  const [userLoading, setuserLoading] = useState(false);
  const [selected, setSelected] = useState({ id: "", name: "" });
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const SendMessage = () => {
    if (message) {
      const body = {
        senderId: Number(senderId),
        receiverId: selected.id,
        message,
      };
      callFunc("chat", "POST", body);
      setMessage("");
      fetchChatInfo(selected.id);
    }
  };

  useEffect(() => {
    fetchUnreadChats();
    return () => {
      setSelected({ id: "", name: "" });
    };
  }, []);

  const fetchChatInfo = async (id) => {
    setLoading(true);
    try {
      const { data } = await apiClient({
        METHOD: "GET",
        URL: `chat/${id}/${senderId}`,
      });
      setData(data);
    } catch (error) {
      toast.error(error.message);
    }
    setLoading(false);
  };

  const fetchChats = async (value) => {
    setuserLoading(true);
    try {
      const { data } = await apiClient({
        METHOD: "GET",
        URL: `chats/${senderId}`,
      });
      setusersData(data);
    } catch (error) {
      toast.error(error.message);
    }
    setuserLoading(false);
  };

  const fetchUnreadChats = async () => {
    setuserLoading(true);

    try {
      const { data } = await apiClient({
        METHOD: "GET",
        URL: `chats/unread/${senderId}`,
      });
      if (data.length === 0) {
        fetchChats();
      } else {
        setusersData(data);
      }
    } catch (error) {
      toast.error(error.message);
    }
    setuserLoading(false);
  };

  const handleSearch = async (e) => {
    const { value } = e.target;
    if (value.length < 2) {
      return;
    }
    setuserLoading(true);

    try {
      const { data } = await apiClient({
        METHOD: "GET",
        URL: `users?search=${value}`,
      });
      const formated = data.map((x) => {
        return {
          ...x,
          sender: {
            name: x.name,
            id: x.id,
          },
        };
      });
      setusersData(formated);
    } catch (error) {
      toast.error(error.message);
    }
    setuserLoading(false);
  };

  return (
    <div>
      <h3>Chat</h3>
      <div className="d-flex border rounded" style={{ height: 550 }}>
        <div className="col-3 overflow-scroll rounded">
          <ul>
            <li className="p-3 border bg-secondary ">
              <h4 className="mb-0 text-white">
                {" "}
                {localStorage.getItem("name")}
              </h4>
              <h6 className="mb-0 text-white">current user</h6>
            </li>
            <div>
              <div className="m-2 px-2 rounded border input-group d-flex align-items-center">
                <span>🔍</span>
                <input
                  type="text"
                  className="form-control border-0"
                  placeholder="Search users"
                  onChange={handleSearch}
                />
              </div>
              {userLoading ? (
                <Loader />
              ) : usersData && usersData.length > 0 ? (
                usersData
                  .filter((y) => String(y.id) !== senderId)
                  .map((x, i) => (
                    <li
                      role={"button"}
                      onClick={() => {
                        setSelected({ name: x.sender.name, id: x.sender.id });
                        fetchChatInfo(x.sender.id);
                        fetchUnreadChats();
                      }}
                      key={i}
                      className="p-3 border d-flex align-items-center justify-content-between"
                    >
                      {x.sender.name}

                      <span className="badge rounded-pill text-bg-warning">
                        {x.unread}
                      </span>
                    </li>
                  ))
              ) : (
                <h4 className="text-center mt-5">No recent chats</h4>
              )}
            </div>
          </ul>
        </div>
        <div className="col-9 border position-relative">
          {selected.name && (
            <div>
              {loading ? (
                <Loader />
              ) : (
                <div>
                  <div className="p-3 bg-light">{selected.name}</div>
                  <div className="overflow-scroll" style={{ height: 325 }}>
                    {data &&
                      data.map((x, i) => (
                        <div
                          key={i}
                          className={` p-3 d-flex ${
                            x.senderId === Number(senderId)
                              ? "justify-content-end"
                              : ""
                          }`}
                        >
                          <div
                            style={{
                              height: 30,
                              width: 30,
                              borderRadius: 50,
                            }}
                            className="bg-info d-flex align-items-center justify-content-center"
                          >
                            {x.sender.name.split("")[0]}
                          </div>
                          <div className="mx-2">
                            <p className="mb-0 bg-light px-3 py-2 rounded border border-info">
                              {x.message}
                            </p>
                            <p className="m-0 text-end">
                              {x.created_at.split("T")[1].split(".")[0]}
                            </p>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              )}

              <div className="bg-light position-absolute w-100 bottom-0">
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type message.."
                  name="msg"
                  required
                ></textarea>

                <div className="mt-2 d-flex justify-content-end">
                  <button
                    onClick={() => SendMessage()}
                    type="submit"
                    className="btn m-2 p-3 fs-6 h-auto"
                    style={{ lineHeight: 0 }}
                  >
                    Send
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Chat;
