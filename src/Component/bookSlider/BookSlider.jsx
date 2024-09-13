import styles from "./BookSlider.module.css";
import {
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
  FaShoppingCart,
} from "react-icons/fa";
import { AiFillEye } from "react-icons/ai";
import Modal from "../../Component/modal/Modal";
import { useContext, useState } from "react";
import Rating from "./Rating";
import cartContext from "../../context/CartContext";

const BookSlider = (props) => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);
  const { addToCart } = useContext(cartContext)
  const handleClick = (direction) => {
    if (direction === "right" && slideIndex < props.data.length - 1) {
      setSlideIndex(slideIndex + 1);
    } else if (direction === "left" && slideIndex > 0) {
      setSlideIndex(slideIndex - 1);
    }
  };

  const handleViewClick = (book) => {
    setSelectedBook(book);
    setIsModalOpen(true);
  };

  return (
    <div className={styles.bookContainer}>
      {slideIndex >= 0 && (
        <FaAngleDoubleLeft
          className={styles.leftIcon}
          onClick={() => handleClick("left")}
        />
      )}

      <div
        className={styles.bookWrapper}
        style={{ transform: `translateX(${slideIndex * -340}px)` }}
      >
        {props.data.map((element) => (
          <div className={styles.bookItem} key={element.id}>
            <img
              src={`/books/${element.image}`}
              alt={element.title}
              className={styles.bookItemImage}
            />
            <h2 className={styles.bookTitle}>{element.title}</h2>
            <Rating rating={element.rating} reviews={element.reviews} />
            <div className={styles.bookPrice}>${element.price}</div>
            <div className={styles.bookIcons}>
              <AiFillEye
                onClick={() => handleViewClick(element)}
                className={styles.bookIcon}
              />
              <FaShoppingCart className={styles.bookIcon} onClick={() => addToCart({...element, quantity: 1})}/>
            </div>
          </div>
        ))}
      </div>

      {slideIndex < props.data.length - 1 && (
        <FaAngleDoubleRight
          className={styles.rightIcon}
          onClick={() => handleClick("right")}
        />
      )}

      {isModalOpen && (
        <Modal book={selectedBook} onClose={() => setIsModalOpen(false)} />
      )}
    </div>
  );
};

export default BookSlider;
