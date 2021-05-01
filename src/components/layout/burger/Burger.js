import React from 'react';
import '../../../App.css';
import BurgerIngredients from './burgerIngredients/BurgerIngredients';

const Burger = (props) => {
  let tfIngredients = Object.keys(props.ingredients).map((igkey) => {
      return [...Array(props.ingredients[igkey])].map((_ , i) => {
                return <BurgerIngredients key={igkey + i} type={igkey} />
      })
  }).reduce((pre , cur) => {
      return pre.concat(cur)
  })


  if (tfIngredients.length === 0) {
      tfIngredients = <p>START ADDING INGREDIENTS</p>
  }

  return (
        <div className="Burger">
            <BurgerIngredients type="BreadTop" />
            {tfIngredients}
            <BurgerIngredients type="BreadBottom" />
        </div>
    )
}

export default Burger