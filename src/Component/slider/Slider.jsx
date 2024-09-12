import styles from "./Slider.module.css";
import img1 from "../../images/img1.jpg";

const Slider = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.slider}>
          <div className={styles.sliderImg}>
            <img src={img1} alt="Image 1" className={styles.img} />
          </div>
          <div className={styles.sliderContent}>
            <h1 className={styles.sliderTextHeader}>
              Welcome to Our Bookstore
            </h1>
            <p className={styles.sliderText}>
              Discover a world of literature, from timeless classics to the
              latest bestsellers. Whether you're searching for your next great
              read or a gift for a book lover, our shelves are stocked with
              something for everyone.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
