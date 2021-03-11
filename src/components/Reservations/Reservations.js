import React from 'react';
import classes from './Reservations.css';
import Reservation from './Reservation/Rerservation';

class Reservations extends React.Component {
  state = {
    items: []
  }
  appendItem= () => {
    const items = this.state.items;
    const newItem = <Reservation/>;
    this.setState({items:[...items,newItem]});
  }
  render() {
    return (
      <div className={classes.Wrapper}>
      <div className={classes.Container}>
        <button onClick={this.appendItem}>ADD Item</button>
        {this.state.items}
      </div>
     </div>
    )
  }
}
export default Reservations;