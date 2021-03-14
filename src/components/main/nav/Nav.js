import React from 'react';
import classes from './Nav.css';
import BrandImage from '../../../img/green_dot.png';
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
      </div>
            
        )
    }
}

export default Nav;