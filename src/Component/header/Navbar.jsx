import styles from "./header.module.css"
import {Link} from "react-router-dom"
const Navbar = (props) => {
    return (
      <nav className={styles.nav} style={{ left: props.toggle && "0" }}>
        <ul className={styles.navLinks}>
          <Link
            to="/"
            className={styles.navItems}
            onClick={() => {
              props.setToggle(!props.toggle);
            }}
          >
            Home
          </Link>
          <Link
            to="/authors"
            className={styles.navItems}
            onClick={() => {
              props.setToggle(!props.toggle);
            }}
          >
            Authors
          </Link>
          <Link
            to="/about"
            className={styles.navItems}
            onClick={() => {
              props.setToggle(!props.toggle);
            }}
          >
            About Us
          </Link>
          <Link
            to="/contact"
            className={styles.navItems}
            onClick={() => {
              props.setToggle(!props.toggle);
            }}
          >
            Contact Us
          </Link>
          <Link
            to="/register"
            className={styles.navItems}
            onClick={() => {
              props.setToggle(!props.toggle);
            }}
          >
            Register
          </Link>
        </ul>
      </nav>
    );
}

export default Navbar;