import React from 'react';
import Begin from "./Begin/Begin";
import AllProducts from "./AllProducts/AllProducts";
import AboutCafe from "./AboutCafe/AboutCafe";
import Contact from "./Contact/Contact";

const Home = () => {
    return (
        <main>
            <Begin/>
            <AllProducts/>
            <AboutCafe/>
            <Contact/>
        </main>
    );
};

export default Home;