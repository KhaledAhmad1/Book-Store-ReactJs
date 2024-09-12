import { FaBookOpenReader } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import styles from "./header.module.css";
import { useContext } from "react";
import cartContext from "../../context/CartContext";
const HeaderMiddle = () => {
  const { cartItemsLength } = useContext(cartContext);
  return (
    <div className={styles.middle}>
      <Link to="/" className={styles.bookLogo}>
        Book
        <FaBookOpenReader className={styles.bookIcon} />
        Store
      </Link>
      <div className={styles.search}>
        <input
          className={styles.searchInput}
          type="text"
          placeholder="Search in Book Store"
        />
        <CiSearch className={styles.searchIcon} />
      </div>
      <div className={styles.cartContainer}>
        <Link to="/cart" className={styles.cart}>
          {cartItemsLength > 0 && <b className={styles.cartNotification}>{cartItemsLength}</b>}
          <FaShoppingCart />
        </Link>
      </div>
    </div>
  );
};
export default HeaderMiddle;
