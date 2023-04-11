import React, {useContext, useEffect, useState} from 'react';
import axios from "../../utils/axios";
import {useNavigate, useParams} from "react-router-dom";
import NameProducts from "../../components/NameProducts/NameProducts";
import Contact from "../Home/Contact/Contact";
import ProductsFilter from "../../components/ProductsFilter/ProductsFilter";
import {AiFillLeftCircle} from "react-icons/ai"
import {HiOutlineShoppingBag} from "react-icons/hi"
import {CustomContext} from "../../utils/Context";
import {TiMinus, TiPlus} from "react-icons/ti";
import {SlBasket} from "react-icons/sl";

const Product = () => {

    const {addBasket, basket, plusOneBasket, minusOneBasket} = useContext(CustomContext)

    const navigate = useNavigate()

    const [product, setProduct] = useState({})

    const {id} = useParams()

    useEffect(() => {
        axios(`/products/${id}`)
            .then(({data}) => setProduct(data))
            .catch((err) => console.log('Ошибка при получении продукта'))
    }, [])


    if (JSON.stringify(product) === '{}') {
        return (
            <h2>Продукт не найден</h2>
        )
    }
    return (
        <section className='product'>
            <NameProducts/>
            <div className="container">
                <div className="product__btns" >
                    <span className="product__icon" onClick={() => navigate(-1)}><AiFillLeftCircle size={40}/></span>
                    <p className="product__btn">Вернуться назад</p>
                </div>
                <div className="product__card">
                    <div className="product__card-left">
                        <img src={`${product.image[0] === '.' ? '../' : ''}${product.image}`} alt=""/>
                    </div>
                    <div className="product__card-right">
                        <h3 className="product__card-title">{product.title}</h3>
                        <p className="product__card-desc">{product.desc}</p>
                        <div className="product__card-right-content">
                            <p className="product__card-weight">Вес: {product.weight} г</p>
                            <div className="product__card-btns">
                                {
                                    basket.findIndex(product => product.id === product.id) > -1
                                        ? <div className="product__card-buy ">
                                            <button onClick={() => minusOneBasket(product.id)} type='button' className='basket__card-minus'>
                                                <TiMinus size={20}/>
                                            </button>

                                            <p className="products__card-price">{basket.find(product => product.id === product.id).count}</p>

                                            <button onClick={() => plusOneBasket(product.id)} type='button' className='basket__card-minus'>
                                                <TiPlus size={20}/>
                                            </button>
                                        </div>
                                        :  <button className="product__card-btn header__btn" onClick={() => addBasket(product)}>Корзина <HiOutlineShoppingBag
                                            size={18}/></button>
                                }
                                <span className="product__card-price">{product.price} COM</span>
                            </div>
                        </div>
                        <div className="product__card-composition">
                            <div className="product__card-text">
                                <span>Белки</span><br/>
                                <p>{product.protein} г</p>
                            </div>
                            <div className="product__card-text">
                                <span>Жиры</span><br/>
                                <p>{product.fats} г</p>
                            </div>
                            <div className="product__card-text">
                                <span>Углеводы</span><br/>
                                <p>{product.carbohydrates} г</p>
                            </div>
                            <div className="product__card-text">
                                <span>Ккал</span><br/>
                                <p>{product.calories} г</p>
                            </div>
                            <div className="product__card-text">
                                <span>Вес</span><br/>
                                <p>{product.weight} г</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="line"></div>

            <ProductsFilter title='С ЭТИМ ТОВАРОМ ПОКУПАЮТ'/>
            <Contact/>
        </section>
    );
};

export default Product;