import React from 'react'

const LoginPopup = ({ onClose }) => {
  return (
    <div className='login-popup'>
      <div className='popup-content'>
        <h2>Login</h2>
        <form>
            <div>
                <div>           
                    <label>Username</label>
                </div>
                <input type='text'></input>
            </div>
            <div>
                <div>           
                    <label>PASSWORD</label>
                </div>
                <input type='text'></input>
            </div>
          <button type='submit'>Login</button>
        </form>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  )
}

export default LoginPopup
