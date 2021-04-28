import React from 'react';
import '../../../App.css';
import BurgerIngredients from './burgerIngredients/BurgerIngredients';

const Burger = () => {
    return (
        <div className="Burger">
            <BurgerIngredients type="BreadTop" />
            <BurgerIngredients type="Meat" />
            <BurgerIngredients type="Cheese" />
            <BurgerIngredients type="BreadBottom" />
        </div>
    )
}

export default Burger