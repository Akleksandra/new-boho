import React from "react";
import styles from "./aboutUs.module.css";
import biglogo from "../Images/biglogo.jpg";
import namiocik from "../Images/namiocik.png";



function AboutUs() {
  return (
    <div id="aboutus">
      <div className={styles.conteiner}>
        <img className={styles.biglogo} src={biglogo} alt="duże logo" />
        <p>
        <h4>
          <img className={styles.smalltent} src={namiocik} alt="small tent" />
          </h4>
          Zdajemy sobie sprawę jak istotna jest celebracja ważnych
          życiowych wydarzeń. Z tego powodu zajmujemy się kompleksową organizacją
          imprez okolicznościowych oraz wydarzeń w plenerze. Zapewniamy wszystko co niezbędne do tego by ten czas był
          w pełni wyjątkowy. Stawiamy na najwyższą jakość wykonywanych usług i niebanalną estetykę.
          Zajmujemy się organizacją od A do Z. Przedstaw nam swoją wizję a my ją zorganizujemy! Zapraszamy do zapoznania się z naszą ofertą.
        </p>
      </div>
    </div>

  );
}

export default AboutUs;
