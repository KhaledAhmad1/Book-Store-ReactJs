import { FaListUl } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { CiLogin } from "react-icons/ci";
import styles from "./header.module.css";
import { Link } from "react-router-dom"
const HeaderTop = (props) => {
  return (
    <div className={styles.top}>
      <div
        className={styles.menu}
        onClick={() => {
          props.setToggle(!props.toggle);
        }}
      >
        {!props.toggle ? (
          <FaListUl className={styles.menuIcon} />
        ) : (
          <IoMdClose className={styles.menuIconTemp} />
        )}
      </div>
      <div className={styles.phone}>
        <FaPhoneAlt className={styles.phoneIcon} />
        010-3065-1374
      </div>
      <div className={styles.text}>
        Explore Your Next Great Read at Our Bookstore
      </div>
      <Link to="/login" className={styles.login}>
        <CiLogin className={styles.loginIcon} />
        Login
      </Link>
    </div>
  );
};
export default HeaderTop;
