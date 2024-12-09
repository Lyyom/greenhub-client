import React from "react";
import { Link } from "react-router-dom";
import styles from "./footer.module.css";
import Homebutton from "./img/Homebutton.png";
import Moneybutton from "./img/Moneybutton.png";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.buttonContainer}>
        <Link to="/" className={styles.button}>
          <img src={Homebutton} alt="Home" />
        </Link>
        <Link to="/products" className={styles.button}>
          <img src={Moneybutton} alt="Produtos" />
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
