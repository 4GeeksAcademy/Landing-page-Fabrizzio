import React from "react";

import Navbar from "../components/Navbar";
import Jumbotron from "../components/Jumbotron";
import Card from "../components/Card";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />

      <Jumbotron />

      <div className="container mt-4 mb-4">

        <div className="row">

          <Card
            image="https://picsum.photos/500/325?random=1"
            title="Card title"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque."
          />

          <Card
            image="https://picsum.photos/500/325?random=2"
            title="Card title"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo magni sapiente, tempore debitis beatae culpa natus architecto."
          />

          <Card
            image="https://picsum.photos/500/325?random=3"
            title="Card title"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque."
          />

          <Card
            image="https://picsum.photos/500/325?random=4"
            title="Card title"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo magni sapiente, tempore debitis beatae culpa natus architecto."
          />

        </div>

      </div>

      <Footer />
    </>
  );
};

export default Home;