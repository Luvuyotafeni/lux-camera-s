import React from 'react';

const Card = (props) => {
  return (
    <>
      <div className='box'>
        <img src={props.image} alt={props.image} width='100px' height='100px' />
        <h2 className='products-title'>{props.title}</h2>
        <h6>Description</h6>
        <p className='products-desc'>{props.desc}</p>
        <p className='price'>Price: R{props.price}</p>
        <p className='rating'>Rating: {props.rating}</p>
      </div>
    </>
  );
};

export default Card;
