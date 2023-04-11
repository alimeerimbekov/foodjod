import React, {useEffect, useState} from 'react';
import Title from "../../components/Title/Title";
import axios from "../../utils/axios";
import Question from "./Question/Question";
import Map from "../../assets/images/mapDelivery.png";
import NameProducts from "../../components/NameProducts/NameProducts";

const Delivery = () => {


    const [delivery, setDelivery] = useState([])

    useEffect(() => {
        axios('/delivery').then(({data}) => {
            setDelivery(data)
        }).catch((err) => console.log(err))
    }, [])

    return (
        <section className='delivery'>
            <NameProducts/>
            <div className="container">
                <Title title='Условия доставки'/>
                <div className="delivery__row">
                    <div className="delivery__quest">
                        {
                            delivery.map((item) => (
                                <Question key={item.id} item={item}/>
                            ))
                        }
                    </div>
                    <div className="delivery__map">
                        <img src={Map} alt=""/>
                    </div>
                </div>
                <div className="delivery__time">
                    <div className="delivery__desc">
                        <p className="delivery__desc-text">График работы доставки:</p>
                        <p className="delivery__desc-timeout">с 10:00-21:00</p>
                    </div>
                    <div className="delivery__desc">
                        <p className="delivery__desc-text">График работы кафе:</p>
                        <p className="delivery__desc-timeout">с 08:00-21:00</p>
                    </div>
                </div>
                <div className="delivery__minClient">
                    <p className="delivery__desc-text">Минимальный заказ:</p>
                    <p className="delivery__desc-timeout">Бесплатная доставка пешим курьером при сумме заказа от 400 ₽ <br/>
                        Доставка оператором такси от любой суммы заказа - по тарифам <br/>
                        перевозчика.</p>
                </div>
            </div>
        </section>
    );
};

export default Delivery;