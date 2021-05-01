import React from 'react';

let Backdrop = (props) => {
    return (
      props.show ? <div onClick={props.clicked} className="backdrop"></div> : null
    )
}


export default Backdrop