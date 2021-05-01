import React from 'react';

const Burgercontrol = (props) => {

    return (
        <div className="burger-control-container">
            <p className="burger-control-container-paragraph">{props.label}</p>
            <button className="less" onClick={props.decrement} disabled={props.disabled}>Less</button>
            <button className="more" onClick={props.increment}>More</button>
        </div>
    )
}

export default Burgercontrol