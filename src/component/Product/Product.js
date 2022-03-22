import React from 'react';
import './Product.css';

const Product = ({addToCard,product}) => {
    // console.log(props);
    // const {addToCard,product}=props
    const {img,name,price,ratings,seller} =product
    return (
        <div className='product'>
            <img src={img} alt="" />
           <div className="card_info">
           <p>Name:{name}</p>
            <p>Price:{price}</p>
            <p>Manufactures:{seller}</p>
            <p>Ratings:{ratings}</p>
           </div>
           <button>
               <p onClick={()=>addToCard(product)} className='card_btn'>Add to Card</p>
           </button>

        </div>
    );
};

export default Product;