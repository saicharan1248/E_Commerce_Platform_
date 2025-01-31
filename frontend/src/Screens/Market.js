import React from "react";
import StudentNavbar from "../common/StudentNavbar";
import useFetch from "../utils/useFetch";
import Loader from "../common/Loader";
import usePost from "../utils/usePost";
import SellerNavbar from "../common/SellerNavbar";
import EmptyData from "../common/EmptyData";

function Products() {
  const { data = [], loading, fetchFunc } = useFetch("product");
  const [show, setShow] = React.useState(false);
  const userId = localStorage.getItem("userId");
  const { callFunc, loading: postLoading } = usePost();

  React.useEffect(() => {
    return () => {
      setShow(false);
    };
  }, []);

  const AddProduct = () => {
    const [form, setForm] = React.useState({
      title: "",
      description: "",
      image: "",
      cost: 0,
    });

    const handleChangeInput = (event) => {
      const { name, value } = event.target;
      setForm({ ...form, [name]: value });
    };

    const handleSubmit = () => {
      if (!form.title || !form.description || !form.cost || !form.image) {
        return;
      }

      callFunc("product", "POST", { ...form, userId, status: "Active" });
      setForm({
        title: "",
        description: "",
        cost: 0,
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
                Add Product
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
                  <label for="recipient-name" class="col-form-label">
                    Cost:
                  </label>
                  <input
                    value={form.cost}
                    onChange={handleChangeInput}
                    name="cost"
                    type="text"
                    class="form-control"
                  />
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
      {/* <!-- Wrapper --> */}
      <div id="wrapper">
        <SellerNavbar />
        <hr className="m-0" />
        <div className="container mt-4">
          <div className="d-flex justify-content-between align-items-center">
            <h3>PRODUCTS</h3>
            <div>
              <form>
                <button onClick={() => setShow(true)} type="button">
                  Add
                </button>
                {/* <button type="button">Remove</button> */}
              </form>
            </div>
          </div>
          <div className="d-flex flex-wrap mb-5">
            {loading ? (
              <Loader />
            ) : show ? (
              <AddProduct />
            ) : data && data.length > 0 ? (
              data.map((x, i) => (
                <div key={i} className="gallery p-3 col-12 col-md-4">
                  <img
                    style={{
                      width: "100%",
                      height: "200px",
                      objectFit: "cover",
                    }}
                    src={x.image}
                  />
                  <h4 className="mb-1">{x.title}</h4>
                  <div className="desc text-secondary">{x.description}</div>
                  <h4>$ {x.cost}</h4>
                  <button
                    className="mt-2"
                    onClick={() => {
                      callFunc(`product/${x.id}`);
                      fetchFunc();
                    }}
                  >
                    Delete{" "}
                  </button>
                </div>
              ))
            ) : (
              <EmptyData />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
