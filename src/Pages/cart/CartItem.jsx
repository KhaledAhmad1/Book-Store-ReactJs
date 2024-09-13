import { GoPlus } from "react-icons/go";
import { FiMinus } from "react-icons/fi";
import { RiDeleteBin5Fill } from "react-icons/ri";
import styles from "./cart.module.css";
import { useContext } from "react";
import cartContext from "../../context/CartContext";
const CartItem = () => {
  const { cartItems, removeFromCart, addToCart } = useContext(cartContext);
  return (
    <div className={styles.cartItems}>
      {cartItems.map(item => {
        return (
          <div key={item.id} className={styles.cartItem}>
            <img className={styles.itemImage} src={`/books/${item.image}`} alt={item.title} />
            <div className={styles.itemInfo}>
              <div className={styles.itembookTitle}>
                <b>Title : </b>{item.title}
              </div>
              <div className={styles.itemAuthor}>
                <b>Author : </b>{item.author}
              </div>
              <div>
                <div className={styles.itemQuantity}>
                  <button>
                    <GoPlus onClick={() => addToCart({ ...item, quantity: item.quantity + 1 })} />
                  </button>
                  <b>{item.quantity}</b>
                  {item.quantity > 0 && <button>
                    <FiMinus onClick={() => addToCart({ ...item, quantity: item.quantity - 1 })} />
                  </button>}
                </div>
                <div className={styles.itemPrice}>
                  ${(item.price * item.quantity).toFixed(2)}
                </div>
                <RiDeleteBin5Fill className={styles.itemDelete} onClick={() => removeFromCart(item.id)} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  )
}

export default CartItem;