import React from "react";
import { toast } from "react-toastify";
import ClubCard from "../common/ClubCard";
import EmptyData from "../common/EmptyData";
import Loader from "../common/Loader";
import StudentNavbar from "../common/StudentNavbar";
import useFetch from "../utils/useFetch";
import usePost from "../utils/usePost";
import Login from "./Login";

function Club(props) {
  const { data = [], loading, fetchFunc } = useFetch("club");
  const { callFunc, loading: postLoading } = usePost();
  const [show, setShow] = React.useState(false);
  const userId = localStorage.getItem("userId");

  React.useEffect(() => {
    return () => {
      setShow(false);
    };
  }, []);

  const AddClub = () => {
    const [form, setForm] = React.useState({
      title: "",
      image: "",
      description: "",
    });

    const handleChangeInput = (event) => {
      const { name, value } = event.target;
      setForm({ ...form, [name]: value });
    };

    const handleSubmit = () => {
      if (!form.title || !form.description || !form.image) {
        return toast.error("Please enter all fields");
      }

      callFunc("club", "POST", {
        ...form,
        userId,
        users: JSON.stringify([Number(userId)]),
        status: "Active",
      });
      setForm({
        title: "",
        image: "",
        description: "",
      });
      setShow(false);
      fetchFunc();
    };

    return (
      <div class="col-6">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                Add Club
              </h1>
            </div>
            <div class="modal-body">
              <form>
                <div class="mb-3">
                  <label for="recipient-name" class="col-form-label">
                    Title:
                  </label>
                  <input
                    value={form.title}
                    onChange={handleChangeInput}
                    name="title"
                    type="text"
                    class="form-control"
                  />
                </div>
                <div class="mb-3">
                  <label for="recipient-name" class="col-form-label">
                    Image:
                  </label>
                  <input
                    value={form.image}
                    onChange={handleChangeInput}
                    name="image"
                    type="text"
                    class="form-control"
                  />
                </div>
                <div class="mb-3">
                  <label for="message-text" class="col-form-label">
                    Description:
                  </label>
                  <textarea
                    name="description"
                    value={form.description}
                    onChange={handleChangeInput}
                    class="form-control"
                  ></textarea>
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button
                onClick={() => setShow(false)}
                type="button"
                class="btn m-2"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                disabled={postLoading}
                type="button"
                class="btn"
              >
                {postLoading ? "Please wait.." : "Submit"}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      {localStorage.getItem("userId") ? (
        <>
          <div id="wrapper border">
            {props.hideNavbar ? null : (
              <>
                <StudentNavbar />
                <hr className="m-0" />
              </>
            )}

            <div className="container d-flex justify-content-between align-items-center">
              <h2>Clubs</h2>

              <section id="Club">
                <id className="container">
                  <button
                    onClick={() => setShow(true)}
                    type="button"
                    className="button_1"
                  >
                    Add
                  </button>
                </id>
              </section>
            </div>

            <div className="container d-flex flex-wrap ">
              {loading ? (
                <Loader />
              ) : show ? (
                <AddClub />
              ) : data && data.length > 0 ? (
                data.map((x, i) => (
                  <ClubCard x={x} i={i} fetchFunc={fetchFunc} />
                ))
              ) : (
                <EmptyData />
              )}
            </div>
          </div>
        </>
      ) : (
        <Login page="Club" />
      )}
    </div>
  );
}

export default Club;
