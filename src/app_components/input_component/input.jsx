import React, {useState} from "react";

function Input(){

    const [name, setName] = useState();
    const [quantity, setQuantity] = useState();
    const [comment, setComment] = useState();
    const [payment, setPayment] = useState();
    const [shipping, setShipping] = useState();

    function onNameChanged(event) {
        setName(event.target.value);
    }
    function onQuantityChanged(event) {
        setQuantity(event.target.value);
    }
    function onCommentChanged(event) {
        setComment(event.target.value);
    }
    function onPaymentChanged(event) {
        setPayment(event.target.value);
    }
    function onShippingChanged(event) {
        setShipping(event.target.value);
    }

    return (
        <div>
            <p>
                Name: {name}
            </p>
            <input value={name} onChange={onNameChanged} placeholder="Enter Name"/>
            <hr/>
            <p>
                Quantity: {quantity}
            </p>
            <input value={quantity} onChange={onQuantityChanged} type="number" placeholder="Enter Quantity"/>
            <hr/>
            <p>
                Comment: {comment}
            </p>
            <textarea value={comment} onChange={onCommentChanged} placeholder="Enter delivery instructions"/>
            <hr />
            <p>
                Payment: {payment}
            </p>
            <select value={payment} onChange={onPaymentChanged}>
                <option value=''> Select an option </option>
                <option value='Visa'> Visa </option>
                <option value='Master'> Master </option>
                <option value='PayPal'> PayPal </option>
                <option value='Banckily'> Banckily </option>
                <option value='Sedad'> Sedad </option>
                <option value='Masrivy'> Masrivy </option>
            </select>
            <hr/>
            <label>
                <input type="radio" value="Pick Up" checked={shipping === "Pick Up"} onChange={onShippingChanged}></input>
                Pick Up
            </label>
            <label>
                <input type="radio" value="Delivery" checked={shipping === "Delivery"} onChange={onShippingChanged}></input>
                Delivery
            </label>
            <p> Shipping: {shipping} </p>
        </div>
    );
    
}

export default Input