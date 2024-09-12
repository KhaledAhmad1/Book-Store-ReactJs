import styles from "./cart.module.css";
import CartItem from "./CartItem"
import OrderSummary from "./OrderSummary"
import { useContext } from "react";
import cartContext from "../../context/CartContext";
const Cart = () => {
  const { cartItems } = useContext(cartContext);
  const totalPrice = cartItems.reduce((acc, cur) => acc + cur.price * cur.quantity, 0).toFixed(2);
  return (
    <div className={styles.cart}>
      <div className={styles.cartTitle}>
        Your Shopping Cart
      </div>
      <div className={styles.wrapper}>
        <CartItem />
        <OrderSummary totalPrice={totalPrice} />
      </div>
    </div>
  );
};

export default Cart;
