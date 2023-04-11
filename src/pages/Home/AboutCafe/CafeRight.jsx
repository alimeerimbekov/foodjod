import React from 'react';
import onion from '../../../assets/images/onion.svg'
import cook from '../../../assets/images/cook.svg'
import vector from '../../../assets/images/vector.svg'
import CafeCard from "../../../components/CafeCard/CafeCard";

const CafeRight = () => {
    return (
        <div className='cafe__right'>
           <div className="cafe__cards">
             <CafeCard img={onion} title={'Свежайшие продукты'}/>
             <CafeCard img={vector} title={'Быстрая доставка'}/>
             <CafeCard img={cook} title={'Лучшие повара'}/>
             <CafeCard img={onion} title={'Свежайшие продукты'}/>
           </div>
        </div>
    );
};

export default CafeRight;