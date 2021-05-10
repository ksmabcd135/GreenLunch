import Title from "./Title/Title";
import Footer from "./Footer/Footer";
import styles from "./Reservation.module.css";

const reservation = () => {
  return (
    <div className={styles.item}>
      <Title />
      test grid layout for Reservations items
      <Footer />
    </div>
  );
};

export default reservation;
