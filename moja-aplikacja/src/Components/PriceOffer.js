import { useRef } from "react";
import styles from "./PriceOffer.module.css";




function PriceOffer  ()  {

const tents = document.getElementById("namiot");
const floor = document.getElementById("parkiet");
const tables = document.getElementById("stół");
const chairs = document.getElementById("krzesła");
const tableware = document.getElementById("zastawa");
const decorations = document.getElementById("ozdoby");
const lights = document.getElementById("oświetlenie");
const heaters = document.getElementById("nagrzewnice");
const waiters = document.getElementById("obsługa");
const count = document.getElementById("oblicz");
const finalprice= document.getElementById("poglądowa cena końcowa");

  function calculateAll (){
    return tents.value* 1000 + floor.value*1000 + tables.value*50 + chairs.value*15
    +tableware.value*15+decorations.value*300+lights.value*200+
    heaters.value*150+waiters.value*500

};

document.getElementById("count").element.addEventListener("click", function() {
let tents = tents.value;
let floor = floor.value;
let tables = tables.value;
let chairs = chairs.value;
let tableware = tableware.value;
let decorations = decorations.value;
let lights = lights.value;
let heaters=heaters.value;
let waiters = waiters.value;

  let result = calculateAll(tents,floor,tables,chairs,tableware,decorations,lights,heaters,waiters);
  finalprice.value = result + " " + " zł" ;
  
  });
    
     return(
        
        <form className={styles.form} >
  <label>
    <input type="text"  placeholder="namiot" id="tents"/>
  </label>
  <label>
    <input type="text" placeholder="parkiet" id="floor" />
  </label>
  <label>
    <input type="text" placeholder="stoły" id="tables" />
  </label>
  <label>
    <input type="text" placeholder="krzesła" id="chairs" />
  </label>
  <label>
    <input type="text" placeholder="zastawa" id="tableware"  />
  </label>
  <label>
    <input type="text" placeholder="wystrój" id="decorations" />
  </label>
  <label>
    <input type="text"  placeholder="oświetlenie" id="lights"/>
  </label>
  <label>
    <input type="text" placeholder="nagrzewnice" id="heaters" />
  </label>
  <label>
    <input type="text" placeholder="obsługa" id="waiters"/>
  </label>
  
  <button className={styles.send} value="Oblicz" id="count" />

  <label className={styles.count} >
    <input type="text" placeholder="poglądowa cena końcowa" id="finalprice"/>
  </label>

</form>
        
        
    )
};

export default PriceOffer;


