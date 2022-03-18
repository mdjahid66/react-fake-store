import React, { useState, useEffect } from 'react';
import Singleproducts from '../Singleproducts/Singleproducts';

const Allproducts = (props) => {
    const { setCartCount } = props;

    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => setProducts(json));
    }, [products])
    return (
        <div className="row container mt-4 mx-auto g-3 ">
            {
                products.map(product => <Singleproducts products={product} key={product.id} setCartCount={setCartCount}></Singleproducts>)
            }
        </div>
    );
};

export default Allproducts;