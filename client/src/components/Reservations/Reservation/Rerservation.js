import Title from "./Title/Title";
import Footer from "./Footer/Footer";
import styles from "./Reservation.module.css";

const reservation = (props) => {
  return (
    <div className={styles.item}>
      <Title />
      {props.item.title}
      {props.item.text}
      <Footer />
    </div>
  );
};

export default reservation;
