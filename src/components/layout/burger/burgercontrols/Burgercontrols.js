import React from 'react';
import Burgercontrol from '../burgercontrol/Burgercontrol';
const Burgercontrols = (props) => {

    let controls = ['Meat' , 'Cheese' , 'Bacon' , 'Salad']
    return (
        <div className="burger-controls-container">
        <p>Total Price : <strong>{props.price.toFixed(2)}</strong></p>
                {controls.map(ctr => {
                   return  <Burgercontrol increment={() => { props.increment(ctr)}}
                    decrement={() => props.decrement(ctr)}
                     disabled={props.disabled[ctr]}
                      label={ctr} key={ctr} />
                })}
        <button className="OrderButton" disabled={!props.purchaseble} onClick={props.clicked}>Order</button>
        </div>
    )
}

export default Burgercontrols