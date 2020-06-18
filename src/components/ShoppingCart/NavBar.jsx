import React from "react";

// Display total item recived from parent(ShoppingApp)
// Component hierarchy(ShoppingApp->NavBar)
function NavBar({ totalItem }) {
  return (
    <>
      <nav className="navbar navbar-light bg-light" >
        <h2>
          Total item
          <span className="badge badge-pill badge-secondary">{totalItem}</span>
        </h2>
      </nav>
    </>
  );
}

export default NavBar;
