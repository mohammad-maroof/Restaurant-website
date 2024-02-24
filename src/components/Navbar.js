import React, {useRef} from 'react'
import Logo from '../assets/images/logo.png';
import {cart} from '../Data'

function Navbar() {
  const searchRef= useRef()
  const cartRef= useRef()
  const navbarRef= useRef()
  const NavbarHandler=()=>{
    cartRef.current.classList.remove("active")
    searchRef.current.classList.remove("active") 
    navbarRef.current.classList.toggle("active")
  }
  const searchHandler=()=>{
    
    searchRef.current.classList.toggle("active") 
    cartRef.current.classList.remove("active")
    navbarRef.current.classList.remove("active") 
  };
  const cartHandler=()=>{
    cartRef.current.classList.toggle("active")
    searchRef.current.classList.remove("active") 
    navbarRef.current.classList.remove("active") 
  }
 
  return (
    <>
    <header className='header'>
      <a href="#" className="logo">
        <img src={Logo} alt="" />
      </a>
      <nav className="navbar" ref={navbarRef} >
           <a href="#home">home</a>
           <a href="#about">about</a>
           <a href="#menu">menu</a>
           <a href="#products">products</a>
           <a href="#Review">Review</a>
           <a href="#contact">contact</a>
           <a href="#blogs">blogs</a>
      </nav>
      <div className="icons">
      <div className="fas fa-search" onClick={searchHandler}></div>
        <div className="fas fa-shopping-cart" onClick={cartHandler}></div>
         <div className="fas fa-bars" id="menu-btn" onClick={NavbarHandler}></div>

      </div>
      <div className='Search-form' ref={searchRef}>
        <input type="search" placeholder='Search here...' id="search-box"/>
        <label htmlFor="search-box" className='fas fa-search'></label>
      </div>
     <div className='cart-items-container' ref={cartRef}>
     {
        cart.map((item, index)=>(
         
         <div className='cart-item' key={index* Math.random()}>
         
          <span className='fas fa-times'></span>
          <img src={item.img} alt=''/>
          <div className='contact'>
            <h3>cart item {index} </h3>
            <div className='price'>$15.99/-</div>
          </div>
         </div> 
          
        ))
    
     
      }
          <button className="btn" href="#">
            checkout
            </button>
     </div>

    </header>
    </>
  )
}

export default Navbar