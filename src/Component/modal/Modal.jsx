import styles from "./Modal.module.css";
import { IoMdClose } from "react-icons/io";
import Rating from "../bookSlider/Rating";
import { FaCartArrowDown } from "react-icons/fa6";
import { Link } from "react-router-dom"
import { useContext, useState } from "react";
import cartContext from "../../context/CartContext";
const Modal = ({ book, onClose }) => {
  const { addToCart } = useContext(cartContext);
  const [Qty, setQty] = useState(1);
  if (!book) return null;
  return (
    <div className={styles.modal}>
      <div className={styles.content}>
        <button className={styles.closeButton} onClick={onClose}>
          <IoMdClose />
        </button>
        <div className={styles.image}>
          <img
            src={`/books/${book.image}`}
            alt={book.title}
            className={styles.bookImage}
          />
        </div>
        <div className={styles.wrapper}>
          <h1 className={styles.title}>{book.title}</h1>
          <p className={styles.status}>
            Status: <span>{book.inStock ? "in stock" : "out of stock"}</span>
          </p>
          <Rating rating={book.rating} reviews={book.reviews} />
          <p className={styles.author}>
            Author: <span>{book.author}</span>
          </p>
          <p className={styles.bookPrice}>
            Price: <span>${book.price}</span>
          </p>
          <div className={styles.addItem}>
            <input
              type="number"
              placeholder="1"
              className={styles.quantityInput}
              min="1"
              value={Qty}
              onChange={(e) => setQty(e.target.value)} 
            />
            <button className={styles.addToCart} onClick={() => addToCart({...book, quantity: Qty})}>
              <FaCartArrowDown className={styles.cartIcon}/>
              Add To Cart
            </button>
          </div>
          <Link to={`/book/${book.id}`} className={styles.detailsLink}>
            See More Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Modal;
