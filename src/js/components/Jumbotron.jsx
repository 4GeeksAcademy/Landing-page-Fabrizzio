import React from "react";

const Jumbotron = () => {
  return (
    <div className="container mt-4">
      <div className="p-5 bg-light rounded">

        <h1 className="display-4 fw-normal">
          A Warm Welcome!
        </h1>

        <p className="lead mt-4 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa,
          ipsam, eligendi, in quo sunt possimus non incidunt odit vero aliquid
          similique quaerat nam nobis illo aspernatur vitae fugiat numquam
          repellat.
        </p>

        <button className="btn btn-primary btn-lg">
          Call to action!
        </button>

      </div>
    </div>
  );
};

export default Jumbotron;