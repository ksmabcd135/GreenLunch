import React from 'react';
import classes from './Nav.css';
import foodImage from '../../../img/food.jpeg';

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
        <img className={classes.Food} src={foodImage}/>
      </div>
            
        )
    }
}

export default Nav;