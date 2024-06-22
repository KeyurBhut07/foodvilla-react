import React from "react";
import { useDispatch, useSelector } from "react-redux";
import FoodItem from "./FoodItem";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <>
      <h1 className="font-bold text-3xl">Cart Items</h1>
      <button className="bg-red-400 p-2 m-5" onClick={handleClearCart}>
        Clear Cart
      </button>
      <div className="flex">
        {cartItems.map((item) => (
          <FoodItem key={item.name} {...item} />
        ))}
      </div>
    </>
  );
};

export default Cart;
