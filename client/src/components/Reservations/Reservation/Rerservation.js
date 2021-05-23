import Title from "./Title/Title";
import Footer from "./Footer/Footer";
import styles from "./Reservation.module.css";

const reservation = (props) => {
  return (
    <div className={styles.item}>
      <Title title={props.item.title} />
        <p>{props.item.text}</p>
      <Footer />
    </div>
  );
};

export default reservation;
