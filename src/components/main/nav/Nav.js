import React from "react";
import classes from "./Nav.css";

class Nav extends React.Component {
  render() {
    return (
      <div>
        <nav className={classes.nav}>
          <ul className={classes.list}>
            <li>
              <a>All</a>
            </li>
            <li>
              <a>MY</a>
            </li>
          </ul>
        </nav>
        <header className={classes.food} />
        <h1 className={classes.title}>
          <span>
            <strong>Having </strong>
          </span>
          Lunch With <br />
          Your 仲間
        </h1>
        <h5 className={classes.scroll}>SCROLL</h5>
        <span className={classes.scrollbar} />
      </div>
    );
  }
}

export default Nav;
