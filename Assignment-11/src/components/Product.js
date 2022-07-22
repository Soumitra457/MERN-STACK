import React from "react";
import './product.css';
export const Product =(props) =>{
    const {product_name,product_image,product_price}=props;
    return(
    <div>
        <div className='product_cart'>
            <div className="product_name">{product_name}</div>
            <div className="product_image">
                <img src={product_image}/>
            </div>
            <div className="product_price">{product_price}</div>
            <div className="button_div">
                <button className="buy_now">Buy Now</button>
            </div>
        </div>
    </div> 
    )
}