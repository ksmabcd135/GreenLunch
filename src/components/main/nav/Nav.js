import React from "react";
import "./Nav.css";

const Nav = () => {
  return (
    <div>
      <nav className="nav">
        <ul className="list">
          <li>
            <a>All</a>
          </li>
          <li>
            <a>MY</a>
          </li>
        </ul>
      </nav>
      <header className="food" />
      <h1 className="title">
        <span>
          <strong>Having </strong>
        </span>
        Lunch With <br />
        Your 仲間
      </h1>
      <h5 className="scroll">SCROLL</h5>
      <span className="scrollbar" />
    </div>
  );
};

export default Nav;
