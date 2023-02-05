import { useState } from "react";
import styles from "./PriceOffer.module.css";

function PriceOffer() {

  let [state, setState] = useState({
    tents: " ",
    floor: " ",
    tables: " ",
    chairs: " ",
    tableware: " ",
    decorations: " ",
    lights: " ",
    heaters: " ",
    waiters: " ",
    finalprice: " ",

  });

  let [total, setTotal] = useState(0);

  function handleInputChange(event) {
    const target = event.target;
    console.log(target.value);

    setState({
      ...state,
      [target.name]: target.value,

    });
  }

  function calculateAll() {
    setTotal(+state.tents * 1000 + +state.floor * 1000 + +state.tables
      * 50 + +state.chairs * 15 + +state.tableware *
      15 + +state.decorations * 300 + +state.lights
      * 200 + +state.heaters * 150 + +state.waiters * 500)
  };



  return (
    <form className={styles.form} >
      <label>
        <input
          name="tents"
          placeholder="namiot"
          type="number"
          value={state.tents}
          onChange={handleInputChange}
        />
      </label>
      <label>
        <input
          name="floor"
          placeholder="parkiet"
          type="number"
          value={state.floor}
          onChange={handleInputChange}
        />
      </label>
      <label>
        <input
          name="tables"
          placeholder="stoły"
          type="number"
          value={state.tables}
          onChange={handleInputChange}
        />
      </label>
      <label>
        <input
          name="chairs"
          placeholder="krzesła"
          type="number"
          value={state.chairs}
          onChange={handleInputChange}
        />
      </label>
      <label>
        <input
          name="tableware"
          placeholder="zastawa"
          type="number"
          value={state.tableware}
          onChange={handleInputChange}
        />
      </label>
      <label>
        <input
          name="decorations"
          placeholder="dekoracje"
          type="number"
          value={state.decorations}
          onChange={handleInputChange}
        />
      </label>
      <label>
        <input
          name="lights"
          placeholder="oświetlenie"
          type="number"
          value={state.lights}
          onChange={handleInputChange}
        />
      </label>
      <label>
        <input
          name="heaters"
          placeholder="nagrzewnice"
          type="number"
          value={state.heaters}
          onChange={handleInputChange}
        />
      </label>

      <label>
        <input
          name="waiters"
          placeholder="obsługa"
          type="number"
          value={state.waiters}
          onChange={handleInputChange}
        />
      </label>
      <label className={styles.buttonone}>
      <button
        type="submit"
        onClick={calculateAll}
      />
      </label>

      <label className={styles.count} >
        <input
          type="number"
          placeholder="poglądowa cena końcowa"
          value={total}
          readOnly
        />
      </label>

      

    </form>


  )
};

export default PriceOffer;


