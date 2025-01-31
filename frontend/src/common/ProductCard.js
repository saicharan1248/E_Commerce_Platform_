import React from "react";
import usePost from "../utils/usePost";

function ProductCard({ x, i }) {
  const { callFunc, loading } = usePost();

  return (
    <div key={i} className="gallery p-3 col-12 col-md-3">
      <img
        style={{
          width: "100%",
          height: "200px",
          objectFit: "cover",
        }}
        src={x.image}
      />
      <h4 className="mb-1">{x.title}</h4>
      <div className="desc text-secondary text-truncate">{x.description}</div>
      {x.cost ? (
        <>
          <h4>$ {x.cost}</h4>
          <button
            disabled={loading}
            className="mt-2"
            onClick={() => {
              callFunc("cart", "POST", {
                userId: localStorage.getItem("userId"),
                productId: x.id,
                quantity: 1,
              });
            }}
          >
            + Add to Cart{" "}
          </button>
        </>
      ) : (
        <>
          <h4>&nbsp;</h4>
          <button disabled={loading} className="mt-2">
            Learn more{" "}
          </button>
        </>
      )}
    </div>
  );
}

export default ProductCard;
