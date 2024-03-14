import React from 'react';
import data from './products_api';
import Card from './card';
import './Blog.css'


const Blog = () => {
    
  return (
    <>
        <section className='products top' id='products'>
            <div className='products_container'>
              <div className='heading'>
                <h2 className='center_title'>Products</h2>
              </div>
                  <div className='products-container'>
                      {data.map((val, index) => {
                      return (
                        <div className='proctucts-box' key={index}>
                          <Card
                          image={val.image}
                          title={val.title}
                          desc={val.desc}
                          price={val.price}
                          rating={val.rating}
                        />
                          <button className='btn_add'>Add to Cart</button>
                        </div>
                      );
                    })}
                  </div>
            </div> 
      </section>
    </>
  )
}

export default Blog