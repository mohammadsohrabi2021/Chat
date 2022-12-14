import React from "react";
// icon
import google from "../../assets/Image/google.svg";
// style
import styles from './Login.module.css'
const Login = () => {
  return (
    <div className={styles.loginPage}>
      <div className={styles.loginCard}>
        <h2>Welcome to Chat!</h2>
        <div className={styles.button}>
          <img src={google} alt="giigle" /> Sign in with Google
        </div>
      </div>
    </div>
  );
};

export default Login;
