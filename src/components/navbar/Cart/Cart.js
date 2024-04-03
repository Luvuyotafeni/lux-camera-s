import React, { useState, useEffect } from 'react';
import './Cart.css';

const Cart = ({ onClose }) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    // Retrieve cart items from Local Storage on component mount
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      try {
        setCartItems(JSON.parse(storedCart)); // Parse JSON string to array
        setTotalItems(JSON.parse(storedCart).length); // Set total items count
      } catch (error) {
        console.error('Error parsing cart data from Local Storage:', error);
        // Handle parsing errors (optional: clear cart or notify user)
      }
    }
  }, []); // Run only once on component mount

  const removeFromCart = (index) => {
    setCartItems((prevCartItems) => {
      const updatedCart = [...prevCartItems];
      updatedCart.splice(index, 1); // Remove item at the specified index
      localStorage.setItem('cart', JSON.stringify(updatedCart)); // Update local storage
      setTotalItems(updatedCart.length); // Update total items count
      return updatedCart;
    });
  };

  const handleCheckout = () => {
    // Implement your checkout logic here
    console.log('Checkout clicked!');
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
        <p>Total Items: {totalItems}</p> {/* Display total items count */}
        {totalItems > 0 && (
          <button className="checkout-button" onClick={handleCheckout}>
            Checkout
          </button>
        )}
      </div>
    </div>
  );
}

export default Cart;
