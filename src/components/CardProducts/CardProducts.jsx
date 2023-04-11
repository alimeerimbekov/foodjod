import React, {useContext} from 'react';
import {SlBasket} from "react-icons/sl";
import {TiPlus, TiMinus} from "react-icons/ti";
import {useNavigate} from "react-router-dom";
import {CustomContext} from "../../utils/Context";

const CardProducts = ({item}) => {

    const navigate = useNavigate()

    const {addBasket, basket, plusOneBasket, minusOneBasket} = useContext(CustomContext)


    return (
        <div className="products__card" >
            <img onClick={() => navigate(`/product/${item.id}`)} src={`${item.image === '.' ? '../' : ''}${item.image}`} alt={item.title} className="products__card-img"/>
            <div className="products__card-info">
                <div className="products__card-name">
                    <h3 className="products__card-title">{item.title}</h3>
                    <p className="products__card-weight">Вес: {item.weight} г</p>
                </div>
                <p className="products__card-desc">
                    {
                        item.desc ? item.desc.slice(0, 100) : ''
                    }
                 ...</p>

                {
                    basket.findIndex(product => product.id === item.id) > -1
                        ? <div className="products__card-buy" key={item.id}>
                            <button onClick={() => minusOneBasket(item.id)} type='button' className='products__card-btn-count header__btn'>
                                <TiMinus size={20}/>
                            </button>

                            <p className="products__card-price">{item.price} C</p>

                            <button onClick={() => plusOneBasket(item.id)} type='button' className='products__card-btn-count header__btn'>
                                <TiPlus size={20}/>
                            </button>

                            <div className="products__card-circle">
                                {basket.find(product => product.id === item.id).count}
                            </div>

                        </div>
                        : <div className="products__card-buy">
                            <p className="products__card-price">{item.price} ₽</p>
                            <button type='button' onClick={() => addBasket(item)} className='products__card-btn header__btn'>В корзину
                                <SlBasket size={20}/>
                            </button>
                        </div>
                }


            </div>

        </div>
    );
};

export default CardProducts;