import React from "react";
import styles from "./App.css"
import Header from "./Components/Header";
import AboutUs from "./Components/AbousUs";
import MoreAboutUs from "./Components/MoreAbout.Us";
import PriceOffer from "./Components/PriceOffer";



function App() {
    return (
        <div className={styles.all}>
            <Header />
            <AboutUs />
            <MoreAboutUs />
            <PriceOffer />
        </div>
    )
};

export default App;
