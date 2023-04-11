import React from 'react';

const CafeCard = ({img, title}) => {
    return (
        <div className='cafe__card'>
            <img src={img} alt='' className="cafe__card-img"/>
            <h3 className="cafe__card-title">{title}</h3>
        </div>
    );
};

export default CafeCard;