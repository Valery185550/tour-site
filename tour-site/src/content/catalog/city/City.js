import React, {Component} from 'react';
import css from "./City.module.css";
import cityBack from "../../../img/cityBcgd.jpg";

class City extends Component {
    render() {
        return (
            <div className={css.cart}>
                <div className={css.front} style={{background:`url(${this.props.img})`}}></div>
                <div className={css.back}  style={{background: `url(${cityBack})`}}>
                    <h2>{this.props.city}</h2>
                    <ul>
                        <li>Кількість днів:  {this.props.days}</li>
                        <li>Кількість ночей:  {this.props.nights}</li>
                        <li>Назва готелю:  {this.props.hotelName}</li>
                        <li>Ціна:  {this.props.price}$</li>
                        <li>Опис:  {this.props.description}</li>
                    </ul>

                </div>

            </div>
        );
    }
}

export default City;