import React from "react";
import styles from "./aboutUs.module.css";
import biglogo from "../Images/biglogo.jpg";
import namiocik from "../Images/namiocik.png";



function AboutUs() {
  return (
    <div>
    <div>
      <div className={styles.biglogo}>
        <img src={biglogo} alt="duże logo" />

        
        <p>
        Zdajemy sobie sprawę jak istotna jest celebracja ważnych 
        życiowych wydarzeń. Z tego powodu zajmujemy się kompleksową organizacją 
        imprez okolicznościowych oraz wydarzeń w plenerze. Zapewniamy wszystko co niezbędne do tego by ten czas był 
        w pełni wyjątkowy. Stawiamy na najwyższą jakość wykonywanych usług i niebanalną estetykę.
        Zajmujemy się organizacją od A do Z. Przedstaw nam swoją wizję a my ją zorganizujemy! Zapraszamy do zapoznania się z naszą ofertą.
        </p>
        
    </div> 
    </div>
    <div>
    <h3 className={styles.smalltent}><img src={namiocik} alt="small tent"></img></h3>
    </div>
    </div>
  
  );
}

export default AboutUs;
