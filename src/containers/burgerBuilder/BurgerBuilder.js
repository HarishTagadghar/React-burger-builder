import React, { Component } from 'react';
import Burger from '../../components/layout/burger/Burger';
class BurgerBuilder extends Component {
    render() {
        return(
            <div>
               <Burger />
                <p>burget controls</p>
            </div>
        )
    }
}

export default BurgerBuilder