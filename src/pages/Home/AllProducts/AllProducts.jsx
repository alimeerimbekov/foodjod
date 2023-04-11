import React, {useEffect, useContext} from 'react';
import ProductsFilter from "../../../components/ProductsFilter/ProductsFilter";
import NameProducts from "../../../components/NameProducts/NameProducts";
import {CustomContext} from "../../../utils/Context";

const AllProducts = () => {

    const {products, getAllProducts} = useContext(CustomContext)

    useEffect(() => {
        getAllProducts()
    }, [])

    return (
        <section className='products'>
            <NameProducts/>
            <ProductsFilter key={products.id} title='ХОЛОДНЫЕ ЗАКУСКИ'/>
            <ProductsFilter key={products.id} title='ГОРЯЧИЕ ЗАКУСКИ'/>
            <ProductsFilter key={products.id} title='Мясные блюда'/>
        </section>
    );
};

export default AllProducts;