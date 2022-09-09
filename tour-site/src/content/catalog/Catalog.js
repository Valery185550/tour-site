import React, {Component} from 'react';
import NavBar from "../../NavBar/NavBar";
import css from "./Catalog.module.css";
import logo from "../../img/logo.png";
import City from "./city/City";
import Venice from "../../img/Venice.jpg";
import Odesa from "../../img/Odesa.jpg";
import Neapol from "../../img/Neapol.jpg";
import Niza from "../../img/Niza.jpg";
import Maerka from "../../img/Maerka.jpg";
import Alania from "../../img/Alania.jpg";
import Lisabon from "../../img/Lisabon.jpg";
import Harlem from "../../img/Harlem.jpg";
import Logo from "../logo/Logo";

class Catalog extends Component {
    render() {
        return (
            <div className={css.bcgd}>
                <Logo/>
                <div className={css.gridContainer}>
                    <div className={css.gridItem1}><NavBar/></div>
                    <div className={css.gridItem2}>
                        <City img={Venice} city={`Венеція`} days={5} nights={4} hotelName={`Antico Panada`} price={500} description={``}  />
                        <City img={Odesa} city={`Одеса`} days={7} nights={6} hotelName={`Марлін`} price={520} description={``}/>
                        <City img={Neapol} city={`Неаполь`} days={6} nights={5} hotelName={`Grand Hotel Vesuvio`} price={700} description={``}/>
                        <City img={Niza} city={`Ніцца`} days={5} nights={4} hotelName={`Trocadero`} price={570} description={``}/>
                        <City img={Maerka} city={`Майорка`} days={7} nights={6} hotelName={`Melia Palma Bay`} price={750} description={``} />
                        <City img={Alania} city={`Аланья`} days={6} nights={5} hotelName={`Ramira Joy Hotel`} price={550} description={``}/>
                        <City img={Lisabon} city={`Ліссабон`} days={5} nights={4} hotelName={`Tivoli Oriente Hotel`} price={600} description={``}/>
                        <City img={Harlem} city={`Шарм-ель-Шейх`} days={7} nights={6} hotelName={`Rixos`} price={620} description={``}/>
                    </div>
                </div>
            </div>
        );
    }
}
export default Catalog;