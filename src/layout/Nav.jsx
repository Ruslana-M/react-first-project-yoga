import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="navbar justify-evenly bg-primary text-primary-content">
      <Link to="/" className="text-xl">
        Yoga for Health
      </Link>
      <Link to="/asanasCollection" className="text-xl">
        View Yoga Collections
      </Link>
    </div>
  );
}

export default Nav;
