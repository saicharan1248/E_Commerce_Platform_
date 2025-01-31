import React from "react";

function AdCard(props) {
  return (
    <div className="card">
      <div className="text-center">
        <img
          style={{
            width: "100%",
            height: "200px",
            objectFit: "cover",
          }}
          alt="sercie"
          src={props.image}
        />
      </div>
      <div className="card-body">
        <h5 className="card-title text-info">{props.title}</h5>
        <p className="card-text">{props.description}</p>
        {props.deleteProduct && (
          <button className="btn btn-danger" onClick={props.deleteProduct}>
            Delete
          </button>
        )}
      </div>
    </div>
  );
}

export default AdCard;
