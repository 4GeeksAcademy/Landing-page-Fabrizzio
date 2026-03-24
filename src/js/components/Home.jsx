import React from "react";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Card from "./Card";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <Navbar />

      <div className="container mt-4">
        <Jumbotron />

        <div className="row">
          <Card
            title="Card title"
            text="Lorem ipsum dolor sit amet"
            image="https://via.placeholder.com/500"
          />
          <Card
            title="Card title"
            text="Lorem ipsum dolor sit amet"
            image="https://via.placeholder.com/500"
          />
          <Card
            title="Card title"
            text="Lorem ipsum dolor sit amet"
            image="https://via.placeholder.com/500"
          />
          <Card
            title="Card title"
            text="Lorem ipsum dolor sit amet"
            image="https://via.placeholder.com/500"
          />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Home;