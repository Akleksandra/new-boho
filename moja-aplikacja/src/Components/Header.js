import React from "react";
import styles from "./Header.module.css";
import logoCompany from "../Images/logoCompany.jpg";
import withMousePosition from "./withMousePosition";

function Header(props) {
    const paralaxe = {
        transform: `translate(
        ${props.mouseX / 100}px,
        ${props.mouseY / 100}px
    )`
    };

    return (
        <div>
        <header className={`${styles.header}`}
            style={paralaxe}>
            <div>
                <div className={styles.wallpaper} style={paralaxe}></div>
                {props.children}
            </div>
        </header>
        <div> <div className={styles.menu}>
                <div className={styles.list}>
                    <ul>
        
                        <li>Kontakt</li>
                        <li>Oferta </li>
                        <li>Galeria</li>
                        <li>O nas </li>
                        
                    </ul>
                </div>
            </div>
            </div>
            </div>
    );
}

export default withMousePosition(Header);
