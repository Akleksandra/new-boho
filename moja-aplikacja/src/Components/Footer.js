import styles from "./Footer.module.css"
import { Link } from "react-scroll";
import email from "../Images/icons/email.jpg";
import olx from "../Images/icons/olx.png";
import instagram from "../Images/icons/instagram-nowa-ikona_1057-2227.jpg";
import facebook from "../Images/icons/facebook.png";


function Footer() {
    return (
        <div className={styles.container} id="media">
            <footer id="footer" className={styles.footer}>
            <h2 className={styles.welcome}>Zapraszamy:</h2>
            <div class="kontakt" className={styles.icons}>
                    <a href="https://www.olx.pl/d/oferta/wynajem-namiotow-imprezowych-CID3018-IDPewQ0.html"><img className={styles.img} src={olx} alt="olx" /></a>
                    <a href="https://www.facebook.com/BOHO-Namiot-108795718460010"><img className={styles.img} src={facebook} alt="facebook" /></a>
                    <a href="https://www.instagram.com/bohonamiot_/"><img className={styles.img} src={instagram} alt="instagram" /></a>
                    <a href="https://mail.google.com/mail/u/0/#inbox"><img  className={styles.img} src={email} alt="email" /></a>
                </div>
            </footer>
        </div>

    )
}

export default Footer;

