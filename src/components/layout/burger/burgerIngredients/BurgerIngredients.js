import React from 'react';
import '../../../../App.css'
import propTypes from 'prop-types'
class BurgerIngredients extends React.Component {
    render() {
    let ingredients = null

    switch (this.props.type) {
        case ('BreadBottom'):
            ingredients = <div className="BreadBottom"></div>
            break;
        case ('BreadTop') : 
            ingredients = <div className="BreadTop">
                <div className="Seeds1"></div>
                <div className="Seeds2"></div>
            </div>
        break;
        case ('Cheese') : 
            ingredients = <div className="Cheese">
              
            </div>
        break;
        case ('Meat') : 
            ingredients = <div className="Meat">
               
            </div>
        break;
        case ('Salad') : 
            ingredients = <div className="Salad">
               
            </div>
        break;
        case ('Bacon') : 
            ingredients = <div className="Bacon">
               
            </div>
        break;
    
        default:
            ingredients = null
            break;
    }
        return ingredients
    }
}

BurgerIngredients.propTypes = {
    type: propTypes.string.isRequired
}


export default BurgerIngredients