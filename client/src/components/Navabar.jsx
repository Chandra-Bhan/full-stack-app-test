import React from "react";
import { NavLink } from "react-router-dom";

function Navabar() {
  return (
    <div className="bg-dark p-3">
      <div className="d-flex justify-content-around w-50 mx-auto h5 text-decoration-none">
        <NavLink className="text-decoration-none" to="/">
          Home
        </NavLink>
        <NavLink className="text-decoration-none" to="/register">
          Register
        </NavLink>
        <NavLink className="text-decoration-none" to="/students">
          Student details
        </NavLink>
      </div>
    </div>
  );
}

export default Navabar;
