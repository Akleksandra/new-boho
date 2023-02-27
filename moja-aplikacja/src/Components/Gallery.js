import React from "react";
import { useState } from "react";
import styles from "./Gallery.module.css";
import tance from "../Images/GalleryImg/tence.jpg";
import stolik from "../Images/GalleryImg/stolik.jpg";
import plecynasali from "../Images/GalleryImg/plecynasali.jpg";
import oczko from "../Images/GalleryImg/oczko.jpg";
import namiot2 from "../Images/GalleryImg/namiot2.jpg";
import namiot1 from "../Images/GalleryImg/namiot1.jpg";
import dodacto from "../Images/GalleryImg/dodacto.jpg";
import bohotlo from "../Images/GalleryImg/bohotlo.jpg";
import bemary from "../Images/GalleryImg/bemary.jpg";
import festiwalsaun from "../Images/GalleryImg/festiwalsaun1.jpg";
import festiwalsaun2 from "../Images/GalleryImg/festiwalsaun2.jpg";
import front from "../Images/GalleryImg/front.jpg";
import deco from "../Images/GalleryImg/deco.jpg";
import stol from "../Images/GalleryImg/stol.jpg";
import sauny from "../Images/GalleryImg/sauny.jpg";




const Gallery = () => {
    let data = [
        {
            id: 1,
            imgSrc: tance,
        },
        {
            id: 2,
            imgSrc: stolik,
        },
        {
            id: 3,
            imgSrc: plecynasali,
        },
        {
            id: 4,
            imgSrc: oczko,
        },
        {
            id: 5,
            imgSrc: namiot2,
        },
        {
            id: 6,
            imgSrc: namiot1,
        },
        {
            id: 7,
            imgSrc: dodacto,
        },
        {
            id: 8,
            imgSrc: bohotlo,
        },
        {
            id: 9,
            imgSrc: bemary,
        },
        {
            id: 10,
            imgSrc: festiwalsaun,
        },
        {
            id: 11,
            imgSrc: festiwalsaun2,
        },
        {
            id: 12,
            imgSrc: front,
        },
        {
            id: 13,
            imgSrc: deco,
        },
        {
            id: 14,
            imgSrc: stol,
        },
        {
            id: 15,
            imgSrc: sauny,
        },




    ]
    const [model, setModel] = useState(false);
    const [tempImgSrc, setTempImgSrc] = useState("");
    const getImg = (imgSrc) => {
        setTempImgSrc(imgSrc);
        setModel(true);

    }

    return (
        <>
            <div>
            <div className={model? "model open" :"model"}>
            <img src={tempImgSrc} alt="#"/>
            </div>
            </div>
            <div className={styles.pictures} id="gallery">
                {data.map((item, index) => {
                    return (
                        <div className={styles.pics} key={index} onClick={() => getImg(item.imgSrc)}>
                            <img src={item.imgSrc} style={{ width: "95%" }} alt="#" />
                        </div>
                    )
                })}

            </div>
        </>
    );
}

export default Gallery;