import styles from "./MoreAboutUs.module.css";
import bohotlo from "../Images/GalleryImg/bohotlo.jpg";
import namiocik from "../Images/namiocik.png";


function MoreAboutUs() {
    return ( 
        <div className={styles.container}>
        <p className={styles.more}>
       To jest przykładowy tekst.To jest przykładowy tekst.To jest przykładowy tekst.To jest przykładowy tekst.To jest przykładowy tekst.
       To jest przykładowy tekst.To jest przykładowy tekst.To jest przykładowy tekst.To jest przykładowy tekst.
       To jest przykładowy tekst.To jest przykładowy tekst.To jest przykładowy tekst.To jest przykładowy tekst.
       To jest przykładowy tekst.To jest przykładowy tekst.To jest przykładowy tekst.To jest przykładowy tekst.
        </p>
        <img src={bohotlo} alt="dekoracje">
        </img>
        </div>

    );
}

export default MoreAboutUs;