import React, {useContext, useState} from 'react';
import {BiMap, BiPhoneCall} from 'react-icons/bi';
import {FaRegUser} from 'react-icons/fa';
import {CiSearch} from 'react-icons/ci';
import {Link, useNavigate} from "react-router-dom";
import {CustomContext} from "../../utils/Context";
import BasketZero from "../../components/BasketZero/BasketZero";


const Header = () => {

    const {user, setUser, basket, useBasket} = useContext(CustomContext)

    const [show, setShow] = useState(false)

    const navigate = useNavigate()

    const logOutUser = () => {
        setUser({
            email: ''
        })
        localStorage.removeItem('user')
        navigate('/register')
    }

    return (
        <header className='header'>
            <div className="container">
                <nav className="header__nav">
                    <div className="header__right">
                        <Link to={'/'} className="header__title">
                            Food Job
                        </Link>
                        <div className="header__content">
                            <div className="header__search">
                                <span className='header__search-map'><BiMap/></span>
                                <input type="text" className="header__search-input"
                                       placeholder='Введите адрес доставки'/>
                                <span className='header__search-icon'><CiSearch/></span>
                            </div>
                            <div className="header__contact">
                                <span className='header__contact-icon'><BiPhoneCall/></span>
                                <div className="header__contact-text">
                                    Контакты: <br/>
                                    <a href="tel:+996(502)505502" className="header__contact-link">
                                        +996(502)505502
                                    </a>

                                </div>
                            </div>
                        </div>
                    </div>

                    {
                        user.email.length ?
                            <div className='header__exit' onClick={logOutUser}>
                                <span><FaRegUser size={25}/></span>
                                <span className='header__exit-btn'>Выйти</span>
                            </div> :
                            <div>
                                <Link to={'/login'}>
                                    <span><FaRegUser size={25}/></span>
                                    <span className='header__exit-btn'>Войти</span>
                                </Link>
                            </div>
                    }

                    <button className="header__btn" onClick={() => {
                        if (basket.length) {
                            navigate('/basket')
                        } else {
                            setShow(true)
                        }
                    }}>
                        Корзина
                        <span className="header__btn-count">{basket.length}</span>
                    </button>
                </nav>
            </div>

            <BasketZero show={show} setShow={setShow}/>
        </header>
    );
};

export default Header;