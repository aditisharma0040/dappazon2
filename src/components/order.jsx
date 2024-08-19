import React from 'react'
import "./order.css"
export default function Order() {

  const taxCalculator = (k) => {
    return (k*2/100).toFixed(6);
  }

  return (
    <div>
      <div className="page-title">Review your order</div>    
        <div className="payment-summary js-payment-summary">
           <div className='pro-left'>
            <p>Product Name</p>
           </div>
           <div className='pro-div'>
           <p>Product Price</p>
           <p>product Tax(@0.2%)</p>
           </div>
        </div>

        <div className="payment-summary js-payment-summary">
        <span>1.</span>
           <div className='pro-left'>
            <p> Product Name</p>
           </div>
           <div className='pro-div'>
           <p>2 ETH</p>
           <p>{taxCalculator(2)} ETH</p>
           </div>
        </div>


        <div className="payment-summary js-payment-summary">
        <span></span>
           <div className='pro-left'>
            <p> Grand Total = </p>
           </div>
           <div className='pro-div'>
           <p>2 ETH</p>
           <p>{taxCalculator(2)} ETH</p>
           </div>
        </div>

      </div>
  
  )
}
