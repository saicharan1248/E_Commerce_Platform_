import React from "react";
import ClubCard from "../common/ClubCard";
import EmptyData from "../common/EmptyData";
import Loader from "../common/Loader";
import ProductCard from "../common/ProductCard";
import StudentNavbar from "../common/StudentNavbar";
import useFetch from "../utils/useFetch";

function StudentDashboard() {
  const { data = [], loading } = useFetch("explore");
  const clubs = data && data.clubs;
  const products = data && data.products;
  const { fetchFunc } = useFetch("club");

  return (
    <div id="wrapper">
      <StudentNavbar />
      <hr className="my-0" />
      {loading ? (
        <Loader />
      ) : (
        <div className="wrapper container col-10 pt-5">
          <h3>Explore Products</h3>
          <div className="d-flex flex-wrap">
            {products && products.length > 0 ? (
              products.map((x, i) => <ProductCard x={x} i={i} />)
            ) : (
              <EmptyData />
            )}
          </div>
          <hr />
          <h3>Explore Clubs</h3>
          <div className="mb-5">
            <div className="d-flex flex-wrap">
              {clubs &&
                clubs.length > 0 &&
                clubs.map((x, i) => (
                  <ClubCard x={x} i={i} fetchFunc={() => fetchFunc()} />
                ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default StudentDashboard;
