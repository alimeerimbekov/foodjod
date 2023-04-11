import React, {useState} from 'react';
import NameProducts from "../../components/NameProducts/NameProducts";
import {Link} from "react-router-dom";
import {AiOutlineLeft} from "react-icons/ai";
import Title from "../../components/Title/Title";

const Order = () => {

    const [active, setActive] = useState(1)
    const [active1, setActive1] = useState(1)
    const [active2, setActive2] = useState(1)

    return (
        <section className='order'>
            <NameProducts/>
            <div className="container">
                <div className="basket__top">
                    <Link to='/basket'>
                        <span className='basket__back'>
                          <AiOutlineLeft/> в корзину
                       </span>
                    </Link>
                    <div className='basket__title'>
                        <Title title='Оформление заказа'/>
                    </div>
                </div>

                <div className="order__block">
                    <form action="" className='order__form'>
                        <div className="order__top">
                            <h2 className="order__title">1. Контактная информация</h2>
                            <label className="order__label">
                                <input type="text" className="order__input" placeholder='Имя*'/>
                                <input type="number" className="order__input" placeholder='Телефон*'/>
                            </label>
                        </div>
                        <div className="order__top">
                            <h2 className="order__title">2. Доставка</h2>

                            <div className="order__btns">
                                <div className="order__left">
                                    <button type='button' className={`order__btn ${active === 1 ? 'active' : ''}`} onClick={ () => setActive(1)}>Доставка</button>
                                    <button type='button' className={`order__btn ${active === 2 ? 'active' : ''}`} onClick={ () => setActive(2)}>Самовывоз</button>
                                </div>
                                {
                                    active === 1 ? <span className="order__ok">Доставим через  1 час 30 минут</span> : ''
                                }
                            </div>

                            <h3 className="order__subtitle">{ active === 1 ? 'Адрес доставки' : 'Выберите ресторан'}</h3>


                            {
                                active === 1 ? <>
                                    <label className="order__label">
                                        <input type="text" className="order__input" placeholder='Укажите улицу*'/>
                                        <input type="number" className="order__input" placeholder='Номер дома*'/>
                                    </label>

                                    <label className="order__label">
                                        <input type="number" className="order__input" placeholder='№ квартиры/офиса'/>
                                        <input type="number" className="order__input" placeholder='Подъезд'/>
                                        <input type="number" className="order__input" placeholder='Этаж'/>
                                    </label>

                                    <label className="order__label">
                                        <input type="text" className="order__inputCom" placeholder='Комментарий'/>
                                    </label>
                                </> : <select className="order__select order__input" placeholder="">
                                    <option value="">123</option>
                                    <option value="">456</option>
                                    <option value="">789</option>
                                </select>
                            }


                        </div>
                        <div className="order__top">
                            <h2 className="order__title">3. Оплатить</h2>

                            <div className="order__btns">
                                <div className="order__left">
                                    <button type='button'  className={`order__btn ${active1 === 1 ? 'active' : ''}`} onClick={ () => setActive1(1)}>Оплата онлайн</button>
                                    <button type='button'  className={`order__btn ${active1 === 2 ? 'active' : ''}`} onClick={ () => setActive1(2)}>Курьеру картой</button>
                                    <button type='button'  className={`order__btn ${active1 === 3 ? 'active' : ''}`} onClick={ () => setActive1(3)}>Наличными</button>
                                </div>
                            </div>
                            {
                                active1 === 3 ? <input className="order__right" type='text' placeholder='Сдача с'/> : ''
                            }
                            {
                                active1 === 1 ? <h3 className='order__subtitle'>Наши реквизиты :</h3> : ''
                            }
                        </div>
                        <div className="order__top">
                            <h2 className="order__title">4. Когда доставить</h2>

                            <div className="order__btns">
                                <div className="order__left">
                                    <button type='button' className={`order__btn ${active2 === 1 ? 'active' : ''}`} onClick={ () => setActive2(1)}>В ближайшее время</button>
                                    <button type='button' className={`order__btn ${active2 === 2 ? 'active' : ''}`} onClick={ () => setActive2(2)}>Ко времени</button>
                                </div>

                                {
                                    active2 === 1 ? '' :     <input className="order__right" type='time' placeholder='Укажите время'/>
                                }
                            </div>

                            <div className="order__inputPerson">Кол-во персон     - 1 +</div>

                            <h3 className="order__subtitle">Хотите мы позвоним?</h3>

                           <div className="order__radio">
                               <input type="radio" className="order__checkbox"/>
                               <span className="order__text">Не перезванивать</span>
                           </div>
                           <div className="order__radio">
                               <input type="radio" className="order__checkbox"/>
                               <span className="order__text">Потребуется звонок оператора</span>
                           </div>
                        </div>

                        <div className="order__bottom">
                          <div className="order__check">
                              <input type="checkbox" className="order__checkbox"/>
                              <p className="order__text">Я согласен на обработку моих перс. данных в соответствии с <span className='order__green'>Условиями</span></p>
                          </div>
                           <button type='submit' className="order__submit ">Оформить заказ</button>
                        </div>

                    </form>
                </div>
            </div>
        </section>
    );
};

export default Order;