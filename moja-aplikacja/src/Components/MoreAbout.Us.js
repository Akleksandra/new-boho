import styles from "./MoreAboutUs.module.css";
import bohotlo from "../Images/GalleryImg/bohotlo.jpg";
import namiocik from "../Images/namiocik.png";


function MoreAboutUs() {
    return ( 
        <div className={styles.container}>
        <p className={styles.more}>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim 
        ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
         ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
         velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
         cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est 
         laborum."
        </p>
        <img src={bohotlo} alt="dekoracje">
        </img>
        </div>

    );
}

export default MoreAboutUs;