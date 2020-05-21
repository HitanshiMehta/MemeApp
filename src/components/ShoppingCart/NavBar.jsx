import React from "react";

function NavBar({ totalItem }) {
  return (
    <>
      <nav className="navbar navbar-light bg-light">
        <h2>
          Total item
          <span className="badge badge-pill badge-secondary">{totalItem}</span>
        </h2>
      </nav>
    </>
  );
}

export default NavBar;
