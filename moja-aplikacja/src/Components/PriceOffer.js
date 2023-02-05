import { useState } from "react";
import styles from "./PriceOffer.module.css";




function PriceOffer() {

  let [state, setState] = useState({
    tents: 0,
    floor: 0,
    tables: 0,
    chairs: 0,
    tableware: 0,
    decorations: 0,
    lights: 0,
    heaters: 0,
    waiters: 0,
    finalprice: 0,

  });

  let [total, setTotal] = useState(0);

  function handleInputChange(event) {
    const target = event.target;

    setState({
      [target.name]: +target.value 

    });
  }

  function calculateAll() {
    setTotal(state.tents * 1000 + state.floor * 1000 + state.tables * 50 + state.chairs * 15
      + state.tableware * 15 + state.decorations * 300 + state.lights * 200 +
      state.heaters * 150 + state.waiters * 500)

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
        onClick={calculateAll}
         />

      <label className={styles.count} >
        <input
          name={"result"}
          type="text"
          placeholder="poglądowa cena końcowa"
          id="finalprice"
          value={total}
          readOnly

        />
      </label>

    </form>


  )
};

export default PriceOffer;


