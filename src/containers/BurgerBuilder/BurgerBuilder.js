import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
}

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4
    }

    addIngredientHandler = (type) => {
        console.log('Add ingredient: ' + type);
        const oldCount = this.state.ingredients[type];
        const newCount = oldCount + 1;
        const newIngredients = {
            ...this.state.ingredients
        };
        newIngredients[type] = newCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const newPrice = this.state.totalPrice + priceAddition;
        this.setState({ingredients: newIngredients, totalPrice: newPrice});
    }

    removeIngredientHandler = (type) => {
        console.log('Remove ingredient: ' + type);
        const oldCount = this.state.ingredients[type];
        if (oldCount === 0) {
            console.log('No more ingredients to remove. Exiting.');
            return;
        }
        const newCount = oldCount - 1;
        const newIngredients = {
            ...this.state.ingredients
        };
        newIngredients[type] = newCount;
        const priceDeduction = INGREDIENT_PRICES[type];
        const newPrice = this.state.totalPrice - priceDeduction;
        this.setState({ingredients: newIngredients, totalPrice: newPrice});
    }

    render () {
        const disabledInfo = {
            ...this.state.ingredients
        }

        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }
        return (
            <Aux>
                <div> Burger Builder </div>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls
                    disabled={disabledInfo}
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler} />
            </Aux>
        );
    }
}

export default BurgerBuilder;
