import React, {useEffect, useState} from 'react';
import CardProducts from "../../components/CardProducts/CardProducts";
import axios from "../../utils/axios";
import {Link, useParams} from "react-router-dom";
import {menuData} from "../../utils/menuData";
import NameProducts from "../../components/NameProducts/NameProducts";
import CategorySelect from "./CategorySelect/CategorySelect";
import OrderSelect from "./OrderSelect/OrderSelect";
import TitleSearch from "./TitleSearch/TitleSearch";

const Catalog = () => {

    const [products, setProducts] = useState([])

    const {category} = useParams()

    const [order, setOrder] = useState('default')

    const [title, setTitle] = useState('')


    useEffect(() => {

        let categories = `${category !== 'all' ? 'category=' + category + '&' : ''}`
        const selectOrder = () => {
            switch (order){
                case 'asc': {
                    return `_sort=price&_order=asc&`
                }
                case 'desc': {
                    return `_sort=price&_order=desc&`
                }
                case 'abc' : {
                    return `_sort=title&_order=asc&`
                }
                case 'minWeight': {
                    return `_sort=weight&_order=asc&`
                }
                case 'maxWeight': {
                    return `_sort=weight&_order=desc&`
                }
                case 'calories': {
                    return `_sort=calories&_order=asc&`
                }
                case 'default': {
                    return ''
                }
            }
        }
        let orders = selectOrder()

        let titleFilter = `${title.length !== 0 ? 'title_like=' + title + '&' : ''}`


        axios(`/products?${categories}${orders}${titleFilter}`)
            .then(({data}) => setProducts(data))
            .catch((err) => console.log("Не удалось найти категорию"))
    }, [category, order, title])

    return (
        <section className='catalog'>
            <NameProducts/>
            <div className="container">
                <div className="catalog__content">
                    <aside className='catalog__aside'>
                        <TitleSearch title={title} setTitle={setTitle}/>
                        <CategorySelect/>
                        <OrderSelect order={order} setOrder={setOrder}/>
                    </aside>
                    <div className="catalog__right">
                        <h2 className='catalog__crumbs'>
                            <Link to={'/'}>Главная</Link> /
                            <span>{category !== 'all' ? menuData.find(item => item.en === category).ru : 'Все продукты'}  </span>
                        </h2>
                        <div className="catalog__row">
                            {
                                products.map((item) => (
                                    <CardProducts key={item.id} item={item}/>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Catalog;