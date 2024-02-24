import React from 'react'
import {product} from '../Data'
import '../assets/css/Product.css'

function Product() {
  return (
    <>
    <section className='products' id="products">
     <h1 className='heading'>
        our <span>products</span>
     </h1>
     <div className='box-container'>
        {
        product.map((item, index)=>(
           <div className='box' key={index}>
            <div className='icons'>
                <button  className='fas fa-shopping-cart'></button>
                <button  className='fas fa-heart'></button>
                <button  className='fas fa-eye'></button>
            </div>
            <div className='image'>
                <img src={item.img} alt=""/>

            </div>
            <div className='content'>
                <h3>Fresh pizza </h3>
              
            
              <div className='stars'>
                <i className='fas fa-star'/>
                <i className='fas fa-star'/>
                <i className='fas fa-star'/>
                <i className='fas fa-star'/>
                <i className='fas fa-star-half-alt'/>
              </div>
            <div className='price'>
                  $12.99 <span>$18.99</span>
            </div>
            </div>

           </div>
        ))}
     </div>
    </section>
    </>
  )
}

export default Product