import styles from "./BookSlider.module.css";
import { FaStar } from "react-icons/fa6";
import { FaStarHalfAlt } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
const Rating = (props) => {
  const { rating } = props;
  const totalStars = 5;
  const stars = [];

  let i = 0;

  while (i < Math.floor(rating)) {
    stars.push(
      <span key={`full-${i}`} className={`${styles.star} ${styles.full}`}>
        <FaStar />
      </span>
    );
    i++;
  }

  if (rating % 1) {
    stars.push(
      <span key="half" className={`${styles.star} ${styles.half}`}>
        <FaStarHalfAlt />
      </span>
    );
    i++;
  }

  while (i < totalStars) {
    stars.push(
      <span key={`empty-${i}`} className={`${styles.star} ${styles.empty}`}>
        <CiStar />
      </span>
    );
    i++;
  }
    stars.push(<span className={styles.reviews}>{props.reviews} reviews</span>);
  return <div className={styles.rating}>{stars}</div>;
};

export default Rating;
