import HeaderMiddle from "./HeaderMiddle";
import HeaderTop from "./HeaderTop";
import Navbar from "./Navbar";
import styles from "./header.module.css";
import { useState } from "react";
const Header = (props) => {
  const [toggle, setToggle] = useState(false);
  return (
    <header className={styles.header}>
      <HeaderTop toggle={toggle} setToggle={setToggle} />
      <HeaderMiddle />
      <Navbar toggle={toggle} setToggle={setToggle} />
    </header>
  );
};
export default Header;
