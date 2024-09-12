import styles from "./Footer.module.css";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { SiCodeforces } from "react-icons/si";
import { FaTelegram } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.socialIcons}>
        <div className={styles.text}>Follow Us in Social Media</div>
        <div className={styles.icon}>
          <FaInstagram className={styles.instagramIcon} />
        </div>
        <div className={styles.icon}>
          <FaFacebook className={styles.facebookIcon} />
        </div>
        <div className={styles.icon}>
          <SiCodeforces className={styles.codeforcesIcon} />
        </div>
        <div className={styles.icon}>
          <FaTelegram className={styles.telegramIcon} />
        </div>
      </div>
      <div className={styles.linksWrapper}>
        <div className={styles.itemLinks}>
          <h3 className={styles.itemTitle}>Useful Links</h3>
          <ul className={styles.links}>
            <li className={styles.link}>Home</li>
            <li className={styles.link}>Authors</li>
            <li className={styles.link}>About Us</li>
            <li className={styles.link}>Contact Us</li>
            <li className={styles.link}>Register</li>
          </ul>
        </div>
        <div className={styles.itemLinks}>
          <h3 className={styles.itemTitle}>Contact Information</h3>
          <div className={styles.addressWrapper}>
            <div className={styles.addressItem}>
              <CiLocationOn className={styles.addressIcon} />
              Egypt , Alexandria
            </div>
            <div className={styles.addressItem}>
              <FaPhoneAlt className={styles.addressIcon} />
              010-3065-1374
            </div>
            <div className={styles.addressItem}>
              <IoIosMail className={styles.addressIcon} />
              <span className={styles.myMail}>
                khaledelgendy0011@gmail.com
              </span>
            </div>
          </div>
        </div>
        <div className={styles.itemLinks}>
          <h3 className={styles.itemTitle}>About Us</h3>
          <p className={styles.description}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est
            provident expedita, corrupti sed ea consequatur! Quis culpa illo
            accusantium quisquam non voluptatum, laborum quos officia. Voluptate
            accusamus et facere nemo.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
