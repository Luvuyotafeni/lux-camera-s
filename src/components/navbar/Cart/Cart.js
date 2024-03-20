// Cart.js
import React, { useState, useEffect } from 'react';
import './Cart.css';

const Cart = ({ onClose, updateCartCount }) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      try {
        const parsedCart = JSON.parse(storedCart);
        setCartItems(parsedCart);
        setTotalItems(parsedCart.length);
      } catch (error) {
        console.error('Error parsing cart data from Local Storage:', error);
      }
    }
  }, []);

  const removeFromCart = (index) => {
    setCartItems((prevCartItems) => {
      const updatedCart = [...prevCartItems];
      updatedCart.splice(index, 1);
      localStorage.setItem('cart', JSON.stringify(updatedCart)); // Update local storage
      setTotalItems(updatedCart.length);
      return updatedCart;
    });

    // Update cart count in NavBar
    updateCartCount(prevCount => prevCount - 1);
  };

  return (
    <div className="cart-overlay">
      <div className="cart">
        <button className="close-cart" onClick={onClose}><i className="bx bx-x"></i></button>
        <h2>Your Cart</h2>
        <div className="cart-items">
          {cartItems.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            cartItems.map((item, index) => (
              <div className="cart-item" key={index}>
                <img src={item.image} alt={item.title} />
                <div className="item-info">
                  <h3>{item.title}</h3>
                  <p>Price: R{item.price}</p>
                  <p>Quantity: {item.quantity}</p>
                  <div className='delete_button'>
                    <button onClick={() => removeFromCart(index)}><i className='bx bxs-trash'></i></button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
        <p>Total Items: {totalItems}</p>
      </div>
    </div>
  );
}

export default Cart;
