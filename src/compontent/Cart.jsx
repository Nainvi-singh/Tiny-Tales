import React, { useState, useEffect } from 'react';
import '../style/Cart.css';
import { BsCart3 } from "react-icons/bs";
import Button from '@mui/material/Button';


const Cart = ({ cart, setCart, handleChange }) => {
  const [price, setPrice] = useState(0);

  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
  };

  const handlePrice = () => {
    let ans = 0;
    cart.forEach((item) => {
      ans += item.amount * item.price;
    });
    setPrice(ans);
  };

  useEffect(() => {
    handlePrice();
  });

  return (
    <div>
      {cart.length === 0 ? (
        <div className="empty_cart">
            <span className='icon'>
            <BsCart3 />
            </span>
          <p>Your cart is empty</p>
          
        </div>
      ) : (
        <div>
          {cart?.map((item) => (
            <div className="cart_box" key={item.id}>
              <div className="cart_img">
                <img src={item.img} alt={item.title} />
                <p>{item.title}</p>
              </div>
              <div>
                <button onClick={() => handleChange(item, +1)}>+</button>
                <button onClick={() => handleChange(item, -1)}>-</button>
                <span className="quantity_box">{item.amount}</span>
              </div>
              <div>
                <span className='price'>{item.price}</span>
                <Button size="small" variant="outlined" color="error" onClick={() => handleRemove(item.id)}>Remove</Button>
              </div>
            </div>
          ))}
          <div className="total">
            <span>Total Price of your Cart</span>
            <span> Rs  {price}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;


