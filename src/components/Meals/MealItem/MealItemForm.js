import React, { useRef, useState } from "react";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const [err, setErr] = useState(false);
  const amountInputRef = useRef();
  const submitHandler = (e) => {
    e.preventDefault();
    const enteredQuantity = amountInputRef.current.value;
    const quantityEntered = +enteredQuantity;

    if (
      enteredQuantity.trim().length === 0 ||
      quantityEntered < 1 ||
      quantityEntered > 5
    ) {
      setErr(true);
      return;
    }

    props.onAddToCart(quantityEntered);
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label='Quantity'
        input={{
          id: "amount",
          type: "number",
          min: "1",
          max: "5",
          defaultValue: "1",
          step: "1",
        }}
      />
      <button>+ Add</button>
      {err && <p>Please select a valid quantity (1 - 5)</p>}
    </form>
  );
};

export default MealItemForm;
// reusable pre-styled utility components like inputs, button,
