import { useState } from "react";
import styles from "./login.module.css";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaEyeSlash, FaEye } from "react-icons/fa6";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setshowPassword] = useState(true);
  const FormSubmitHandler = (e) => {
    e.preventDefault();
    if (email.trim() === "") return toast.error("Email is required");
    if (password.trim() === "") return toast.error("Password is required");
    if (password.length < 6)
      return toast.error("Password length must be greater than 6");
  };

  const showPasswordHandler = () => {
    setshowPassword((prev) => !prev);
  };

  return (
    <div className={styles.formWrapper}>
      <ToastContainer theme="colored" />
      <h1 className={styles.formTitle}>Login to your account</h1>
      <form className={styles.form} onSubmit={FormSubmitHandler}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className={styles.formInput}
        />
        <input
          type={showPassword ? "password" : "text"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className={styles.formInput}
        />
        {showPassword ? (
          <FaEye
            className={styles.showPassword}
            onClick={showPasswordHandler}
          />
        ) : (
          <FaEyeSlash
            className={styles.hidePassword}
            onClick={showPasswordHandler}
          />
        )}

        <button className={styles.formBtn}>Login</button>
      </form>
      <div className={styles.formFooter}>
        Don't have an account{" "}
        <Link to="/register" className={styles.formLink}>
          Register
        </Link>
      </div>
    </div>
  );
};

export default Login;
