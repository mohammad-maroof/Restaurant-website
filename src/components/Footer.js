import React from 'react'
import '../assets/css/Footer.css'

function Footer() {
  return (
   <>
   <section className='footer'>
    <div className='share'>
        <link href="#" className='fab fa-facebook-f'></link>
        <link href="#" className='fab fa-twitter'></link>
        <link href="#" className='fab fa-instagram'></link>
        <link href="#" className='fab fa-linkedin'></link>
        <link href="#" className='fab fa-pinterest'></link>


    </div>
    <div className='links'>
        <a href='#'>home</a>
        <a href='#'>about us</a>
        <a href='#'>menu</a>
        <a href='#'>products</a>
        <a href='#'>contact</a>
        <a href='#'>blogs</a>
    </div>
     <div className='credit'>
        created by <span>Maroof shaikh</span>
     </div>
   </section>
   </>
  )
}

export default Footer