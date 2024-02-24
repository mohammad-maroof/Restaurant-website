import React from 'react'
import '../assets/css/Blogs.css'
import {blog} from "../Data"

function Blogs() {
  return (
    <section className='blogs' id='blogs'>
        <h1 className='heading'>
            our <span> blogs</span>
             </h1>
             <div className='box-container'>
                  {
                    blog.map((item, index)=>(
                        <div className='box' key={index}>
                            <div className='image'>
                                <img src={item.img} alt=""/>
                            </div>
                            <div className='content'>
                                <a href="#" className='title'>
                                    tasy and refreshing spices
                                </a>
                                <span>by admin / 21st may, 2022</span>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                     Atque aperiam porro
                                </p>
                                <button className='btn'> Read more....</button>

                            </div>
                        </div>
                    ))
                  }
             </div>

    </section>
  )
}

export default Blogs