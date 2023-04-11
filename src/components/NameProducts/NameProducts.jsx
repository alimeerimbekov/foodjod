import React from 'react';
import {useNavigate} from "react-router-dom";
import {menuData} from "../../utils/menuData";

const NameProducts = () => {

    const navigate = useNavigate()

    return (
        <ul className="products__list">

            {
                menuData.map(item => (
                    <li key={item.en} className="products__item" onClick={() => navigate(`/catalog/${item.en}`)}>{item.ru}</li>
                ))
            }

        </ul>
    );
};

export default NameProducts;