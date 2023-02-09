import styles from "./Gallery.module.css";
import tance from "../Images/GalleryImg/tence.jpg";
import stolik from "../Images/GalleryImg/stolik.jpg";
import plecynasali from "../Images/GalleryImg/plecynasali.jpg";
import nowenowe from "../Images/GalleryImg/nowenowe.jpg";
import namiot2 from "../Images/GalleryImg/namiot2.jpg";
import namiot1 from "../Images/GalleryImg/namiot1.jpg";
import dodacto from "../Images/GalleryImg/dodacto.jpg";
import bohotlo from "../Images/GalleryImg/bohotlo.jpg";
import bemary from "../Images/GalleryImg/bemary.jpg";
import festiwalsaun from "../Images/GalleryImg/festiwalsaun1.jpg";
import festiwalsaun2 from "../Images/GalleryImg/festiwalsaun2.jpg";




function Gallery() {

    let images = [
        {
            id: 1,
            imgSrc: tance,
        },
        {
            id: 1,
            imgSrc: stolik,
        },
        {
            id: 1,
            imgSrc: plecynasali,
        },
        {
            id: 1,
            imgSrc: nowenowe,
        },
        {
            id: 1,
            imgSrc: namiot2,
        },
        {
            id: 1,
            imgSrc: namiot1,
        },
        {
            id: 1,
            imgSrc: dodacto,
        },
        {
            id: 1,
            imgSrc: bohotlo,
        },
        {
            id: 1,
            imgSrc:bemary ,
        },
        {
            id: 1,
            imgSrc:festiwalsaun ,
        },
        {
            id: 1,
            imgSrc:festiwalsaun2 ,
        },

    ]
    return (
        <div>
            <div className={styles.pictures}>
                {images.map((item, index) => {
                    return(
                    <div className={styles.pics} key={index}>
                       <img src={item.imgSrc} style={{width:"100%"}} />
                    </div>
                    )
                })}

            </div>
        </div>
    );
            }

    export default Gallery;