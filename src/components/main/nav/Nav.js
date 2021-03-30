import React from 'react';
import classes from './Nav.css';

class Nav extends React.Component {
    
  render() {
    return (
      <div>          
        <nav className={classes.Nav}>
          <ul className={classes.List}>
            <li><a>All</a></li>
            <li><a>MY</a></li>
          </ul>
        </nav>
        <header className={classes.Food}/>
        <h1 className={classes.Title}><span><strong>Having </strong></span>Lunch With <br/>Your 仲間</h1>
        <h5 className={classes.Scroll}>scroll</h5>
      </div>
            
        )
    }
}

export default Nav;