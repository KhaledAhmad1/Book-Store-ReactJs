import styles from "./cart.module.css";

const OrderSummary = ({totalPrice}) => {
    return (
        <div className={styles.orderSummary}>
        <div className={styles.orderTitle}>
          ORDER SUMMARY
        </div>
        <div className={styles.orderItem}>
          <span>Subtotal</span>
          <span>${totalPrice}</span>
        </div>
        <div className={styles.orderItem}>
          <span>Shpping Cost</span>
          <span>0</span>
        </div>
        <div className={styles.orderItem}>
          <span>Discount</span>
          <span>0</span>
        </div>
        <div className={styles.orderItem}>
          <span>Total</span>
          <span>${totalPrice}</span>
        </div>
      </div>
    )
}
export default OrderSummary;