import React from 'react'
import "./page.css";
 import { getProduct } from '../products.js';
import products from '../products.js';

export default function Product({cart,setCart}) {

async function handleClick(k){
   const newCart=[];
   for(let i=0;i<cart.length;i++){
    newCart.push(cart[i]);
   }
 const product1 = getProduct(k);
   newCart.push(product1);
if(product1[0].isStock)setCart(newCart);
else alert("Sorry!Sold Out Already!");
}
    return (
     products.map((product) => {
      return (
        <div key={product.productId} className="notablecollections-nft md1">
        <div className="image-container">
          <img alt="pro" src='https://picsum.photos/300/150'/>
        </div>
        <div className="nft-description">
           <p className="FIFA">{product.name} </p>                
          <div className="nft-stats">
            <div className="nft-floor" >
              <p className="Floor">Stock</p>
              <p className="MATIC">{product.isStock ? "In Stock" : "OutOfStock"}</p>
            </div>
            <div className="nft-volume ">
              <p className="Total-Volume">
                Total Volume
              </p>
              <p className="ETH">
                {product.price} ETH
              </p>
            </div>
          </div>           
        </div>
        <button  onClick={() => handleClick(product.productId)}  className="addbuttonhome js-add-1">{product.isStock ? "Add To Cart" :" Out Of Stock"}</button>
      </div>
      )
     })
  )
}
