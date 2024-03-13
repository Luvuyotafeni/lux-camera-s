import React, { useState } from 'react';
import data from './products_api';
import Card from './card';
import CartPopup from './CartPopup';
import './Blog.css'


const Blog = () => {
  const [showCartPopup, setShowCartPopup] = useState(false);

    const handleAddToCart = () => {

      setShowCartPopup(true);
    };
  
    const handleClosePopup = () => {
      setShowCartPopup(false);
    };
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
                <button onClick={handleAddToCart}>Add to Cart</button>
                    </div>
                );
                })}
            </div>
            {showCartPopup && <CartPopup onClose={handleClosePopup} />}
        </div> 
      </section>
    </>
  )
}

export default Blog