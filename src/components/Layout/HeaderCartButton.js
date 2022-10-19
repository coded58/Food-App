import React, { useContext, useEffect, useState } from "react";
import CartContext from "../../store/cartContext";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const [bumpAnimation, setBumpAnimation] = useState(false);
  const cartCont = useContext(CartContext);
  const { items } = cartCont;
  const numOfCartItems = items.reduce((initialAmount, item) => {
    return initialAmount + item.amount;
  }, 0);

  const btnClasses = `${classes.button} ${bumpAnimation ? classes.bump : ""}`;
  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBumpAnimation(true);

    const timer = setTimeout(() => {
      setBumpAnimation(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);
  return (
    <button className={btnClasses} onClick={props.onShowCart}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Cart</span>
      <span className={classes.badge}>{numOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
