import React, {useEffect, useState} from 'react';
import Title from "../../components/Title/Title";
import axios from "../../utils/axios";
import Contact from "../Home/Contact/Contact";
import NameProducts from "../../components/NameProducts/NameProducts";

const Sales = () => {

    const [sales, setSales] = useState([])

    useEffect(() => {
        axios('/sales').then(({data}) => {
            setSales(data)
        }).catch((err) => console.log(err))
    }, [])



    return (
        <>
            <NameProducts/>
            <section className='sales'>
                <div className="container">
                    <Title title='АКЦИИ'/>
                </div>
                <div className="line"></div>
                <div className="container">
                    <div className="sales__row">
                        {
                            sales.map((item) => (
                                <div key={item.id} className="sales__card">
                                    <img className='sales__card-img' src={item.image} alt=""/>
                                    <div className='sales__card-block'>
                                        <h3 className='sales__card-title'>{item.title}</h3>
                                        <p className='sales__card-desc'>{item.desc}</p>
                                        <p className='sales__card-date'>{item.date}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
            <Contact/>
        </>
    );
};

export default Sales;