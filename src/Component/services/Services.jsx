import { FaShippingFast } from "react-icons/fa";
import { FaGifts } from "react-icons/fa";
import { GiReturnArrow } from "react-icons/gi";
import { MdConnectWithoutContact } from "react-icons/md";
import styles from "./Services.module.css";
const Services = () => {
  return (
    <div className={styles.services}>
      <div className={styles.serviceItem}>
        <FaShippingFast className={styles.icon} />
        Free Shipping
      </div>
      <div className={styles.serviceItem}>
        <FaGifts className={styles.icon} />
        Gift Card
      </div>
      <div className={styles.serviceItem}>
        <GiReturnArrow className={styles.icon} />7 Days Return
      </div>
      <div className={styles.serviceItem}>
        <MdConnectWithoutContact className={styles.icon} />
        Contact Us
      </div>
    </div>
  );
};
export default Services;
