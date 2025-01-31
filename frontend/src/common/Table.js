import React, { useState } from "react";
import { toast } from "react-toastify";
import apiClient from "../utils/api";
import usePost from "../utils/usePost";

export const Table = ({ data, fetchFunc, role }) => {
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const { callFunc } = usePost();

  const AddUser = () => {
    const [form, setForm] = React.useState({
      name: "",
      email: "",
      password: "",
      phone: "",
      role,
    });

    const RegisterAction = async () => {
      if (!form.email || !form.password || !form.name || !form.phone) {
        return toast["error"]("Please enter all fields");
      }

      setLoading(true);
      try {
        const response = await apiClient({
          URL: "register",
          METHOD: "POST",
          BODY: form,
        });
        toast[response.status === 200 ? "success" : "error"](response.message);
        setShow(!show);
        fetchFunc();
      } catch (error) {
        console.log(error.response.message);
      }
      setLoading(false);
    };

    const handleChangeInput = (event) => {
      const { name, value } = event.target;
      setForm({ ...form, [name]: value });
    };

    return (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          RegisterAction();
        }}
      >
        <div className="mb-4">
          <input
            type="text"
            className="form-control"
            name="name"
            onChange={handleChangeInput}
            value={form.name}
            placeholder="Name"
          />
        </div>
        <div className="mb-4">
          <input
            type="tel"
            className="form-control"
            name="phone"
            onChange={handleChangeInput}
            value={form.phone}
            placeholder="Phone"
            maxLength={10}
          />
        </div>
        <div className="mb-4">
          <input
            type="email"
            className="form-control"
            name="email"
            onChange={handleChangeInput}
            value={form.email}
            placeholder="Email"
          />
        </div>
        <div className="mb-4">
          <input
            value={form.password}
            type="password"
            name="password"
            onChange={handleChangeInput}
            className="form-control"
            placeholder="Password"
          />
        </div>
        <button
          disabled={loading}
          type="submit"
          className="btn btn-primary px-5 py-2 w-100"
        >
          {loading ? "Please wait.." : "Submit"}
        </button>
      </form>
    );
  };

  const changeStatus = (userId, status) => {
    callFunc(`user/${userId}`, "POST", {
      status,
    });
    fetchFunc();
  };

  return (
    <div>
      <div className="d-flex justify-content-end">
        <span
          className={`btn btn-${show ? "danger" : "primary"} mb-3`}
          onClick={() => setShow(!show)}
        >
          {show ? "X Close" : "+ Add User"}
        </span>
      </div>
      {show ? (
        <div className="col-6">
          <AddUser />
        </div>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th className="fw-bold"> Name</th>
              <th className="fw-bold"> Email</th>
              <th className="fw-bold"> Mobile</th>
              <th className="fw-bold"> Status</th>
              <th className="fw-bold"> Action</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map((x, i) => (
                <tr key={i}>
                  <td>{x.name}</td>
                  <td>{x.email}</td>
                  <td>{x.phone}</td>
                  <td>{x.status}</td>
                  <td>
                    <span
                      onClick={() =>
                        changeStatus(
                          x.id,
                          x.status === "Active" ? "Inactive" : "Active"
                        )
                      }
                      className="btn btn-secondary"
                    >
                      Change Status
                    </span>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      )}
    </div>
  );
};
