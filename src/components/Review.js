import React from 'react';
import { review } from '../Data';
import quoteImg from '../assets/images/quote-img.png';
import '../assets/css/Review.css';

function Review() {
  return (
   <>
      <section className='review' id='Review'>
        <h1 className='heading'>
          customer's <span> review </span>
        </h1>
        <div className='box-container'>
          {review.map((item, index) => (
            <div className='box' key={index}>
              <img src={quoteImg} alt='' className='quote' />
              <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Obcaecati delectus nesciunt ratione architecto aut laudantium  
                Officia mollitia ipsa reiciendis ea iste hic optio molestiae  quae!</p>
                <img src={item.img} alt='' className='users'/>
                <h3>john deo</h3>
                <div className='stars'>
                <i className='fas fa-star'/>
                <i className='fas fa-star'/>
                <i className='fas fa-star'/>
                <i className='fas fa-star'/>
                <i className='fas fa-star-half-alt'/>
                     </div>

            </div>
            
        
          ))}
        </div>
      </section>
   </>
  );
}

export default Review;
