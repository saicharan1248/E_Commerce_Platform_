import React from "react";
import AdCard from "../common/AdCard";
import EmptyData from "../common/EmptyData";
import Loader from "../common/Loader";
import SellerNavbar from "../common/SellerNavbar";
import useFetch from "../utils/useFetch";
import usePost from "../utils/usePost";

function Advertisements() {
  const { data = [], loading, fetchFunc } = useFetch("ad");
  const [show, setShow] = React.useState(false);
  const userId = localStorage.getItem("userId");
  const { callFunc, loading: postLoading } = usePost();

  React.useEffect(() => {
    return () => {
      setShow(false);
    };
  }, []);

  const AddAdvt = () => {
    const [form, setForm] = React.useState({
      title: "",
      description: "",
      image: "",
    });

    const handleChangeInput = (event) => {
      const { name, value } = event.target;
      setForm({ ...form, [name]: value });
    };

    const handleSubmit = () => {
      if (!form.title || !form.description || !form.image) {
        return;
      }

      callFunc("ad", "POST", { ...form, userId, status: "Active" });
      setForm({
        title: "",
        description: "",
        image: "",
      });
      setShow(false);
      fetchFunc();
    };

    return (
      <div class="col-4">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                Add Advertisement
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
                    Image URL:
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
                class="btn btn-secondary m-2"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                disabled={postLoading}
                type="button"
                class="btn btn-primary"
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
    <div id="wrapper">
      <SellerNavbar />
      <hr className="my-2" />

      <div className="mt-5">
        <div className="container">
          <div className="d-flex justify-content-between">
            <h3>Advertisements</h3>
            <button
              className="btn btn-outline-success"
              onClick={() => setShow(true)}
            >
              + Add Advt
            </button>
          </div>
          {loading ? (
            <Loader />
          ) : (
            <div className="d-flex flex-wrap">
              {show ? (
                <AddAdvt />
              ) : data && data.length > 0 ? (
                data.map((x, i) => (
                  <div className="p-4 col-12 col-md-4" key={i}>
                    <AdCard
                      title={x.title}
                      image={x.image}
                      description={x.description}
                      category="ad"
                      index={i}
                      cost={x.cost}
                      deleteProduct={() => {
                        callFunc(`ad/${x.id}`);
                        fetchFunc();
                      }}
                    />
                  </div>
                ))
              ) : (
                <EmptyData />
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Advertisements;
