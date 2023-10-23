import React, { createContext, useEffect, useState } from 'react';
import './Home.css'
import Product from '../Product/Product';
import Order from '../Order/Order';

export const contentApi = createContext();
export const contentApiTwo= createContext();

const Home = () => {

    const [sProduct, setProduct] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {

        fetch('product.json')
        .then(responce => responce.json())
        .then(sData => setProduct(sData))

    },[])
    

    return (
        <>
            <div className="product-head">
                <contentApi.Provider value={[sProduct, setProduct]}>

                    <contentApiTwo.Provider value={[cart, setCart]}>

                        <div className="product-left">
                            <Product></Product>
                        </div>

                        <Order></Order>

                    </contentApiTwo.Provider>
                </contentApi.Provider>
            </div>

        </>
    );
};

export default Home;