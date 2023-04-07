import React from 'react';

const Cart = ({cart,handleRemoveCart}) => {
    /*----Conditional Rendaring-----*/
    let message;
    if(cart.length === 0){
        message = <p>Please add some product</p>
    }
    return (
        <div>
            <h2>Order Summery: {cart.length}</h2>
            {message}
            {
                cart.map(tshirt=><p
                 key={tshirt._id}>
                {tshirt.name}
                <button onClick={()=> handleRemoveCart(tshirt._id)}>X</button>
                </p>)
            }
        </div>
    );
};

export default Cart;

