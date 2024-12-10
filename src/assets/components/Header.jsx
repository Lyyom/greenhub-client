import React from "react";
import {Link} from "react-router-dom"
import styles from "./Header.module.css"
import Logo from "./img/Logo.png"
import menuImg from "./img/menuImg.png"

function Header(){

return(
    <header>
    <div className={styles.buttonContainer}>
        <Link to ="/" className={styles.button}>
            <img src={Logo} alt="imagem da logo do site" />
        </Link>
    </div>
    </header>
);


}

export default Header