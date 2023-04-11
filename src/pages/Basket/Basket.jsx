import React, {useContext} from 'react';
import NameProducts from "../../components/NameProducts/NameProducts";
import {Link} from "react-router-dom";
import {AiOutlineLeft} from 'react-icons/ai'
import Title from "../../components/Title/Title";
import {TiPlus, TiMinus, TiDelete} from "react-icons/ti";
import {CustomContext} from "../../utils/Context";


const Basket = () => {

    const {basket, plusOneBasket, minusOneBasket, delBasket} = useContext(CustomContext)

    return (
        <section className='basket'>
            <NameProducts/>
            <div className="container">
                <div className="basket__top">
                    <Link to='/catalog'>
                        <span className='basket__back'>
                          <AiOutlineLeft/> к выбору блюда
                       </span>
                    </Link>
                    <div className='basket__title'>
                        <Title title='КОРЗИНА'/>
                        <span className='basket__count'>(в корзине {basket.length} товара)</span>
                    </div>
                </div>

                <ul className='basket__list'>
                    {basket.map((item) => (
                        <li key={item.id} className='basket__item'>

                            <div className="basket__card">

                                <div className="basket__card-left">
                                    <img className='basket__card-img' src={item.image} alt={item.title}/>

                                    <div className="basket__card-desc">
                                        <h4 className="basket__card-title">{item.title}</h4>
                                        <p className="basket__card-text">{item.desc}</p>
                                    </div>
                                </div>

                                <div className="basket__card-add">

                                    <button type='button' onClick={() => minusOneBasket(item.id)}
                                            className='basket__card-minus'>
                                        <TiMinus size={20}/>
                                    </button>

                                    <p className="basket__card-count">{item.count}</p>

                                    <button type='button' onClick={() => plusOneBasket(item.id)}
                                            className='basket__card-minus'>
                                        <TiPlus size={20}/>
                                    </button>

                                </div>

                                <p className="basket__card-price">{item.price * item.count} COM</p>

                                <button type='button' className="basket__card-delete"
                                        onClick={() => delBasket(item.id)}><TiDelete size={40}/></button>

                            </div>


                        </li>
                    ))}
                </ul>

                <div className="basket__center">

                    <div className="basket__order">
                        <div className="basket__order-left">
                            <p className="basket__order-price"><span>Итого:</span>
                                {
                                    basket.reduce((acc, rec) => {
                                        return acc + rec.price * rec.count
                                    }, 0)
                                } Сом</p>
                            <p className="basket__order-discount">До бесплатной доставки не хватает: <span>
                                   {
                                       basket.reduce((acc, rec) => {
                                           if (acc + rec.price * rec.count >= 1500) {
                                               return 'бесплатная доставка'
                                           } else {
                                               return acc === 'number' ?  '' : `${1500 - rec.price * rec.count} Сом`
                                           }
                                       }, 0)
                                   }


                            </span>
                            </p>
                            <p className="basket__order-minSum">Минимальная сума заказа 1500 Сом</p>
                        </div>
                        <button type='button' className="basket__order-btn"><Link to={'/order'}>Оформить заказ</Link></button>
                    </div>
                </div>


            </div>
        </section>
    );
};

export default Basket;