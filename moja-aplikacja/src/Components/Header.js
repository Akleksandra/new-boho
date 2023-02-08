import React from "react";
import styles from "./Header.module.css";
import withMousePosition from "./withMousePosition";
import { Link, animateScroll as scroll } from "react-scroll";

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

                        <li>
                            <Link to="aboutus" spy={true}
                             smooth={true} offset={-100} duration={500}>Kontakt</Link></li>
                        <li>
                            <Link to="aboutus" spy={true}
                             smooth={true} offset={-100} duration={500}>Galeria</Link>
                        </li>
                        <li>
                            <Link to="offer" spy={true}
                             smooth={true} offset={-100} duration={500}>Oferta</Link>
                        </li>
                        <li>
                            <Link to="aboutus" spy={true}
                             smooth={true} offset={-100} duration={500}>O nas</Link>
                        </li>

                    </ul>
                </div>
            </div>
            </div>
        </div>
    );
}

export default withMousePosition(Header);
