import React from 'react';
import CafeLeft from "./CafeLeft";
import CafeRight from "./CafeRight";
import cafeBg from "../../../assets/images/cafeBg.png";

const AboutCafe = () => {
    return (
        <section className='cafe'>
            <div className="container">
                <div className="cafe__info">
                    <img src={cafeBg} alt="" className="cafe__img"/>
                    <CafeLeft/>
                    <CafeRight/>
                </div>
            </div>
        </section>
    );
};

export default AboutCafe;