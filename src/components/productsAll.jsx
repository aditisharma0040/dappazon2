import React from 'react'
import Product from "./product";
import "./page.css";
export default function productsAll({cart,setCart}) {
  return (
    <div>
            <div className="App">
        <div className="notablecollections real">
          <div
            className="Notable-Collections 
    "
          >
            Notable Collections
          </div>
          <div className="notable-collections-nfts">
            <Product cart={cart} setCart={setCart}/>      
          </div>
        </div>
      </div>
    </div>
  )
}
