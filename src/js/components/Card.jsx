import React from "react";

const Card = (props) => {
  return (
    <div className="col-lg-3 col-md-6 mb-4">
      <div className="card h-100 text-center">

        <img
          src={props.image}
          className="card-img-top"
          alt="card"
        />

        <div className="card-body">

          <h4 className="card-title">
            {props.title}
          </h4>

          <p className="card-text">
            {props.description}
          </p>

        </div>

        <div className="card-footer bg-white">
          <button className="btn btn-primary btn-sm">
            Find Out More!
          </button>
        </div>

      </div>
    </div>
  );
};

export default Card;