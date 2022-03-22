import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [product, setProduct]= useState([])
    const [cards , setCards]= useState([])
    useEffect(()=>{
        fetch('products.json')
        .then(res =>res.json())
        .then(data =>setProduct(data))
    },[])

    const addToCard = (product) =>{
        // console.log(product);
        const newProduc = [...cards,product];
        setCards(newProduc)
    }
    return (
        <div className='shop'> 
            <div className="produc_container">
                {
                    product.map(product =><Product
                         key ={product.id}
                         product ={product}
                         addToCard ={addToCard}
                    ></Product>)
                }

            </div>

            <div className="summary_container">
                <h1>Summary</h1>
                 <p>Card:{cards.length}</p>
            </div>
        </div>
    );
};

export default Shop;