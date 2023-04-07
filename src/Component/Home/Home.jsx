import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import TShart from '../TShart/TShart';
import "./Home.css"
import Cart from '../Cart/Cart';
import toast from 'react-hot-toast';

const Home = () => {
    const tshirts = useLoaderData();
    const [cart,setCart] = useState([])

    const handlenAddToCart = tshirt =>{
       const exist = cart.find(ts=>ts._id===tshirt._id);
       if(exist){
           toast('You have already added this T-shirt')
       }
       else{
        const newCart = [...cart,tshirt]
        setCart(newCart)
       }
    }

    const handleRemoveCart = id =>{
       const removeCart = cart.filter(ts =>ts._id !==id);
       setCart(removeCart)
    }

    // console.log(tshirts)
    
    return (
        <div className='home-container'>
         <div className='t-shirts'>
         {
             (tshirts)?.map(tshirt=><TShart
              key={tshirt._id}
              tshirt={tshirt}
              handlenAddToCart={handlenAddToCart}
              ></TShart>)
          }
         </div>
         <div className="cart-container">
            <Cart cart={cart}
            handleRemoveCart={handleRemoveCart}
            ></Cart>
         </div>
        </div>
    );
};

export default Home;