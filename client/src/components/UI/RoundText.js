import classes from './RoundText.module.css';
import { Fragment } from 'react';

const RoundText = props => {
  return (
    <Fragment>
      <div className={`${classes['round-text']} ${props.className}`}>
        {props.title}
      </div>
      <div>
        {props.text}
      </div>
    </Fragment>
  );
}

export default RoundText;