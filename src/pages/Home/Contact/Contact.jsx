import React from 'react';
import {GrLocation} from 'react-icons/gr'
import {HiOutlineMail} from 'react-icons/hi'
import {SlSocialVkontakte} from 'react-icons/sl'
import {FaFacebookSquare, FaYoutubeSquare, FaInstagramSquare} from 'react-icons/fa'


const Contact = () => {
    return (
        <section className='contact'>
            <div className="container">
                <div className="contact__box">
                    <div className="contact__card">
                        <h3 className="contact__title">КОНТАКТЫ</h3>
                        <div className="contact__line"></div>
                        <div className="contact__address">
                            <span className="contact__icon"><GrLocation className='contact__icon'/></span>
                            <div className="contact__desc">
                                <p className="contact__desc-add">Наш адрес:</p>
                                <p className="contact__desc-text">
                                    МО, городской округ Красногорск, село Ильинкое, <br/>
                                    Экспериментальная улица, 10
                                </p>
                            </div>
                        </div>
                        <div className="contact__address">
                            <span className="contact__icon"><HiOutlineMail/></span>
                            <div className="contact__desc">
                                <p className="contact__desc-add">Наша почта:</p>
                                <p className="contact__desc-text">auto.wash@gmail.com</p>
                            </div>
                        </div>
                        <div className="contact__line"></div>
                        <div className="contact__btns">
                            <button className="contact__btn">ЗАБРОНИРОВАТЬ СТОЛ</button>
                            <div className="contact__tel">
                                <a href='tel:+996(502)505502' className="contact__tel-number">+996(502)505502</a>
                                <p className="contact__tel-text">Звоните или оставляйте заявку</p>
                            </div>
                        </div>
                        <div className="contact__social">
                            Мы в соц сетях:
                            <span>
                                <FaFacebookSquare/>
                                <SlSocialVkontakte/>
                                <FaInstagramSquare/>
                                <FaYoutubeSquare/>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;