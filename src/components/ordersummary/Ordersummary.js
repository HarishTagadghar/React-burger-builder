import React from 'react';

let Ordersummary = (props) => {
    let ingredientssummary = Object.keys(props.ingredients)
    .map(igkey => {
        return <li key={igkey}>{igkey} : {props.ingredients[igkey]}</li>
    })
    return (
        <div>
            <h1>Order Summary</h1>
            <p>A burger With following ingredients : </p>
            <ul>{ingredientssummary}</ul>
            <p><strong>Total Price : {props.price}</strong></p>
            <p>Continue to checkout?</p>
            <button className="Button Danger" onClick={props.cancle}>CANCLE</button>
            <button className="Button Success" onClick={props.continue}>CONTINUE</button>
        </div>
    )
}

export default Ordersummary