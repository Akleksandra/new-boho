<<<<<<< HEAD
import { useState } from "react";
=======
import { useRef } from "react";
>>>>>>> de3298250e55803d9c089b751f3d9a33473956cb
import styles from "./PriceOffer.module.css";




<<<<<<< HEAD
function PriceOffer() {

  let [state, setState] = useState({
    tents: "",
    floor: "",
    tables: "",
    chairs: "",
    tableware: "",
    decorations: "",
    lights: "",
    heaters: "",
    waiters: "",
    result: "",

  });

  let [total, setTotal] = useState(" ");

  function handleInputChange(event) {
    const target = event.target;

    setState({
      [target.name]: target.value
    });
  }

  function calculateAll() {
    setTotal(state.tents * 1000 + state.floor * 1000 + state.tables * 50 + state.chairs * 15
      + state.tableware * 15 + state.decorations * 300 + state.lights * 200 +
      state.heaters* 150 + state.waiters * 500)

  };


  return (

    <form className={styles.form} >
      <label>
        <input
          name={"tents"}
          type="text"
          placeholder="namiot"
          id="tents"
          value={state.tents}
          onChange={handleInputChange}
        />
      </label>
      <label>
        <input
          name={"floor"}
          type="text"
          placeholder="podłoga"
          id="floor"
          value={state.floor}
          onChange={handleInputChange}
        />
      </label>
      <label>
        <input
          name={"tables"}
          type="text"
          placeholder="stoły"
          id="tables"
          value={state.tables}
          onChange={handleInputChange}
        />
      </label>
      <label>
        <input
          name={"chairs"}
          type="text"
          placeholder="krzesła"
          id="chairs"
          value={state.chairs}
          onChange={handleInputChange} />
      </label>
      <label>
        <input
          name={"tableware"}
          type="text"
          placeholder="zastawa"
          id="tableware"
          value={state.tableware}
          onChange={handleInputChange} />
      </label>
      <label>
        <input
          name={"lights"}
          type="text"
          placeholder="oświetlenie"
          id="decorations"
          value={state.lights}
          onChange={handleInputChange}
        />
      </label>
      <label>
        <input
          name={"decorations"}
          type="text"
          placeholder="dekoracje"
          id="lights"
          value={state.decorations}
          onChange={handleInputChange}
        />
      </label>
      <label>
        <input
          name={"heaters"}
          type="text"
          placeholder="nagrzewnice"
          id="heaters"
          value={state.heaters}
          onChange={handleInputChange} />
      </label>
      <label>
        <input
          name={"waiters"}
          type="text"
          placeholder="obsługa"
          id="waiters"
          value={state.waiters}
          onChange={handleInputChange}
        />
      </label>

      <button
        name={"oblicz"}
        type="button"
        id="count"
        value={state.button}
        onChange={handleInputChange} />

      <label className={styles.count} >
        <input
          name={"result"}
          type="text"
          placeholder="poglądowa cena końcowa"
          id="finalprice"
          value={state.result}
          onChange={calculateAll}
         
        />
      </label>

    </form>


  )
=======
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
>>>>>>> de3298250e55803d9c089b751f3d9a33473956cb
};

export default PriceOffer;


