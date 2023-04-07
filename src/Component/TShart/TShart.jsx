import React from 'react';
import "./Tshirt.css"

const TShart = ({tshirt,handlenAddToCart}) => {
    const {name,picture,price,gender} = tshirt;
    return (
        <div className='t-shirt'>
            <h2>{name}</h2>
          <img width="60%" src={picture} alt="" />
          <p>Price:${price}</p>
          <p>Gender:{gender}</p>
          <button onClick={()=> handlenAddToCart(tshirt)}>Buy Now</button>
        </div>
    );
};

export default TShart;