import Title from "./Title/Title";
import Footer from "./Footer/Footer";
import styles from "./Reservation.module.css";
import RoundText from "../../UI/RoundText";
const reservation = (props) => {
  return (
    <div className={styles.item}>
      <Title title={props.item.title} />
      <RoundText title="DATE" text={props.item.date}/>
      <Footer />
    </div>
  );
};

export default reservation;
