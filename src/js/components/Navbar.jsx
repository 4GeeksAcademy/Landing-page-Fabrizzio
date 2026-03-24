import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark px-4">
      <span className="navbar-brand">Start Bootstrap</span>

      <div>
        <a className="text-white mx-2">Home</a>
        <a className="text-white mx-2">About</a>
        <a className="text-white mx-2">Services</a>
        <a className="text-white mx-2">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;