// Blog.js
import React, { useState, useEffect } from 'react';
import data from './products_api'; // Assuming products data in a separate file
import Card from './card';
import './Blog.css';

const Blog = () => {
  const [cart, setCart] = useState([]); // Initialize empty cart state

  useEffect(() => {
    // Retrieve cart items from Local Storage on component mount
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      try {
        const parsedCart = JSON.parse(storedCart);
        setCart(parsedCart); // Parse JSON string to array
      } catch (error) {
        console.error('Error parsing cart data from Local Storage:', error);
        // Handle parsing errors (optional: clear cart or notify user)
      }
    }
  }, []); // Run only once on component mount

  const addToCart = (product, event) => {
    event.preventDefault(); // Prevent the default form submission behavior
  
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);

      if (existingItem) {
        // Update quantity if item already exists in cart
        const updatedCart = prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
        return updatedCart;
      } else {
        // Add new item to cart with quantity 1
        const updatedCart = [...prevCart, { ...product, quantity: 1 }];
        return updatedCart;
      }
    });
  };

  useEffect(() => {
    // Update Local Storage with cart items on cart state change
    localStorage.setItem('cart', JSON.stringify(cart)); // Stringify cart array
  }, [cart]); // Run whenever the `cart` state changes

  return (
    <>
      <section className='products top' id='products'>
        <div className='products_container'>
          <div className='heading'>
            <h2 className='center_title'>Products</h2>
          </div>
          <div className='products-container'>
            {data.map((val, index) => (
              <div className='products-box' key={index}>
                <Card
                  image={val.image}
                  title={val.title}
                  desc={val.desc}
                  price={val.price}
                  rating={val.rating}
                />
                <button className='btn_add' onClick={(event) => addToCart(val, event)}>
                  Add to Cart <i className='bx bx-shopping-bag'></i>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
