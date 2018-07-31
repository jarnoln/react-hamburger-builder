import React from 'react';

import BurgerIngredient from './BurgerIngredient/BurgerIngredient'
import './Burger.css';

const burger = (props) => {
    console.log('Rendering burger. Ingredients:');
    console.log(props.ingredients);
    const transformedIngredients = Object.keys(props.ingredients)
        .map(ingKey => {
            console.log(ingKey);
            return [...Array(props.ingredients[ingKey])].map((_, i) => 
                <BurgerIngredient key={ingKey + i} type={ingKey} />
            )
        });
    console.log(transformedIngredients);
    return(
        <div className="Burger">
            <BurgerIngredient type='bread-top' />
            {transformedIngredients}
            <BurgerIngredient type='bread-bottom' />
        </div>
    );
}

export default burger;
