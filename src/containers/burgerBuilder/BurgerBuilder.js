import React, { Component } from 'react';
import Burger from '../../components/layout/burger/Burger';
import Burgercontrols from '../../components/layout/burger/burgercontrols/Burgercontrols';
import Ordersummary from '../../components/ordersummary/Ordersummary';
import Modal from '../../components/UI/modal/Modal';




let Prices = {
    Meat:2,
    Cheese:1.4,
    Bacon:2.1,
    Salad:0.7
}

class BurgerBuilder extends Component {

    

    state = {
       ingredients: {
        Meat : 0,
        Cheese : 0,
        Bacon : 0 ,
        Salad : 0
       },
       totalPriec: 4,
       purchaseble:false,
       orderClicked:false
    }
    purchasebleHandler (ingredients) {
        let sum = Object.keys(ingredients)
                  .map(keys => {
                      return ingredients[keys]
                  }).reduce((pre , cur) => {
                      return pre + cur
                  })
        this.setState({purchaseble : sum > 0})
    }
    increseHandler = (type) => {
       let selectedIngredient =  this.state.ingredients[type];
       let updatedIngredient = selectedIngredient + 1;
       let oldIngredients = {...this.state.ingredients};
       oldIngredients[type] =updatedIngredient;

       let oldPrice = this.state.totalPriec;
       let updatedPrice = oldPrice + Prices[type]

       this.setState({ingredients : oldIngredients , totalPriec : updatedPrice})
       this.purchasebleHandler(oldIngredients)
    }
    decrementHandler = (type) => {
        let selectedIngredient =  this.state.ingredients[type];
        let updatedIngredient = selectedIngredient -1;
        let oldIngredients = {...this.state.ingredients};
        oldIngredients[type] =updatedIngredient;
 
        let oldPrice = this.state.totalPriec;
        let updatedPrice = oldPrice - Prices[type]
 
        this.setState({ingredients : oldIngredients , totalPriec : updatedPrice})
        this.purchasebleHandler(oldIngredients)
    }

    openOrderSummary = () => {
        this.setState({orderClicked:true})
    }
    
    closeOrdersummary = () => {
        this.setState({orderClicked:false})
    }

    continueOrder = () => {
        alert('ORDER PLACED')
        this.closeOrdersummary()
        
    }





    render() {

        let disabled = {...this.state.ingredients}
        for (let key in disabled) {
            disabled[key] = disabled[key] <= 0 
        }
        return(
            <div>
            
                <Modal closed={this.closeOrdersummary} show={this.state.orderClicked}>
                    <Ordersummary price={this.state.totalPriec} ingredients={this.state.ingredients} cancle={this.closeOrdersummary} continue={this.continueOrder} />
                </Modal>
            
               <Burger ingredients={this.state.ingredients} />
               <Burgercontrols 
               increment={this.increseHandler}
               decrement={this.decrementHandler} 
               purchaseble={this.state.purchaseble} 
               disabled={disabled} 
               price={this.state.totalPriec} 
                clicked={this.openOrderSummary}
               />
               
            </div>
        )
    }
}

export default BurgerBuilder