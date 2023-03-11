import React from "react";
import { useDispatch, useSelector } from "react-redux";

import CartItem from "./CartItem";
import { openModal } from "../features/modal/modalSlice";

function CartContainer() {
  const { cartItems, amount, total } = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  if (amount < 1) {
    return (
      <section className="cart">
        <header>
          <h2>your bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    );
  }

  return (
    <section className="cart">
      <h2>your bag</h2>
      <div>
        {cartItems.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </div>
      <footer>
        <hr></hr>
        <div className="cart-total">
          <h4 className="total">
            total
            <span>${total}</span>
          </h4>
        </div>
        <button className="btn btn-clear" onClick={() => dispatch(openModal())}>clear cart</button>
      </footer>
    </section>
  );
}

export default CartContainer;