import React from 'react';
import Backdrop from '../backdrop/Backdrop';
let Modal = (props) => {
    return (
<div>
<Backdrop show={props.show} clicked={props.closed} />

<div style={{transform: props.show ? 'translateY(0)' : 'translateY(-100vh)' , opacity: props.show ? 1 : 0}} className="Modal">
        {props.children}

</div>

</div>
    )
}

export default Modal