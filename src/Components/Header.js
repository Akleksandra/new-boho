import React from "react";
import styles from "./Header.module.css";
import { Link } from "react-scroll";

function Header(props) {
  

    return (


        <div className={styles.menu}>
            <div className={styles.list}>
                <ul>
                    <li>
                        <Link to="media" spy={true}
                            smooth={true} offset={-100} duration={500}>Social media</Link></li>

                    <li>
                        <Link to="contactform" spy={true}
                            smooth={true} offset={-100} duration={500}>Napisz do nas</Link></li>
                    <li>
                        <Link to="gallery" spy={true}
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
            <div className={styles.wallpaper}></div>
        </div>

    );
}


export default Header;
