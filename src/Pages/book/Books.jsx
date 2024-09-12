import { useParams } from "react-router-dom";
import books from "../../data/books"
import styles from "./book.module.css"
import Rating from "../../Component/bookSlider/Rating";
import { IoCart } from "react-icons/io5";
import { RiPagesLine } from "react-icons/ri";
import { IoLanguageOutline } from "react-icons/io5";
import { MdOutlineDateRange } from "react-icons/md";
import { useContext, useState } from "react";
import cartContext from "../../context/CartContext";

const Book = () => {
  const { id } = useParams();
  const book = books.find(ele => ele.id === +id);
  const { addToCart } = useContext(cartContext);
  const [Qty, setQty] = useState(1);
  return (
    <div className={styles.book}>
      <div className={styles.bookContent}>
        <img src={`/books/${book.image}`} alt={book.title} className={styles.bookImage} />
        <div className={styles.info}>
          <h1 className={styles.bookTitle}>{book.title}</h1>
          <div className={styles.author}>
            by <span>{book.author}</span> (Author)
          </div>
          <Rating rating={book.rating} reviews={book.reviews} />
          <div className={styles.addToCart}>
            <input type="number" className={styles.bookAddToCart} value={Qty} min="1" max="100" onChange={(e) => setQty(e.target.value)} />
            <button className={styles.cartBtn} onClick={() => { addToCart({ ...book, quantity: Qty }) }}>
              <IoCart />
              Add To Cart
            </button>
          </div>
        </div>
      </div>
      <p className={styles.description}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis ipsum quae facere nulla aut consequatur minus asperiores distinctio ullam libero velit inventore numquam, corporis ducimus assumenda quaerat sunt, error voluptas?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, repudiandae quia! Soluta, debitis magni velit tempora doloribus incidunt, nesciunt sequi et sit in veritatis, aspernatur nihil magnam dicta eos quaerat?
      </p>
      <div className={styles.bookIcons}>
        <div className={styles.bookIcon}>
          <small>Print Length</small>
          <RiPagesLine />
          <b>{book.printLength} Pages</b>
        </div>
        <div className={styles.bookIcon}>
          <small>Language</small>
          <IoLanguageOutline />
          <b>{book.language}</b>
        </div>
        <div className={styles.bookIcon}>
          <small>Publication Date</small>
          <MdOutlineDateRange />
          <b>{book.PublicationDate}</b>
        </div>
      </div>
    </div>
  );
};

export default Book;
