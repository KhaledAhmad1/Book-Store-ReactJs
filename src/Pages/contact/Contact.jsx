import styles from "./contact.module.css"
import { FaHouseUser } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
const Contact = () => {
  return (
    <section className={styles.contact}>
      <div className={styles.wrapper}>
        <div className={styles.contactItem}>
          <div className={styles.contactItemIcon}>
            <FaHouseUser />
            Address
          </div>
          <p className={styles.contactItemText}>Egypt , Alexandria</p>
        </div>
        <div className={styles.contactItem}>
          <div className={styles.contactItemIcon}>
            <BsFillTelephoneFill />
            Phone
          </div>
          <p className={styles.contactItemText}>010-3065-1374</p>
        </div>
        <div className={styles.contactItem}>
          <div className={styles.contactItemIcon}>
            <MdEmail />
            Email
          </div>
          <p className={styles.contactItemText}>ka44203011@gmail.com</p>
        </div>
      </div>
      <form className={styles.contactForm} onSubmit={e => e.preventDefault()}>
        <h2 className={styles.contactFormTitle}>Contact Us Form</h2>
        <div className={styles.contactInputWrapper}>
          <input type="text" placeholder="Name *" />
          <input type="text" placeholder="Subject *" />
          <input type="text" placeholder="Email *" />
        </div>
        <textarea className={styles.contactTextArea} placeholder="Your Message *" rows="5"></textarea>
        <button className={styles.contactBtn}>Send</button>
      </form>
    </section>
  )
};

export default Contact;
