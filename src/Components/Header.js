import React from "react";
import styles from "./Header.module.css";
/*import withMousePosition from "./withMousePosition";*/
import { Link, animateScroll as scroll } from "react-scroll";

function Header(props) {
    /*const paralaxe = {
        transform: `translate(
        ${props.mouseX / 100}px,
        ${props.mouseY / 100}px
    )`
    };*/

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
            <div className={styles.wallpaper} /*style={paralaxe}*/></div>
        </div>

    );
}


export default Header;
