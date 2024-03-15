import React, { useState } from 'react';

const LoginPopup = ({ onClose }) => {
  const [isLogin, setIsLogin] = useState(true);

  const handleToggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className='login-popup'>
      <div className='popup-content'>
        <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
        <form>
            <div>
                <div>           
                    <label>Username</label>
                </div>
                <input type='text' className='logIn_input'></input>
            </div>
            <div>
                <div>           
                    <label>PASSWORD</label>
                </div>
                <input type='text' className='logIn_input'></input>
            </div>
            {!isLogin && (
              <div>
                <div>
                  <label>Email</label>
                </div>
                <input type='email' className='logIn_input'></input>
              </div>
            )}
            <div>
              {isLogin ? (
                <a href='#' onClick={handleToggleForm} className='login_link'>Don't have an account? Sign Up</a>
              ) : (
                <a href='#' onClick={handleToggleForm} className='login_link'>Already have an account? Login</a>
              )}
            </div>
          <button type='submit'>{isLogin ? 'Login' : 'Sign Up'}</button>
        </form>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default LoginPopup;
