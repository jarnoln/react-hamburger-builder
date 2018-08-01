import React from 'react';
import PropTypes from 'prop-types';

import BurgerIngredient from './BurgerIngredient/BurgerIngredient'
import './Burger.css';

const burger = (props) => {
    // console.log('Rendering burger. Ingredients:');
    // console.log(props.ingredients);
    let transformedIngredients = Object.keys(props.ingredients)
        .map(ingKey => {
            // console.log(ingKey);
            return [...Array(props.ingredients[ingKey])].map((_, i) => 
                <BurgerIngredient key={ingKey + i} type={ingKey} />
            )
        })
        .reduce((arr, el) => {
            return arr.concat(el);
        }, []);
    // console.log(transformedIngredients);
    if (transformedIngredients.length === 0) {
        transformedIngredients = <p> Please start adding ingredients </p>;
    }
    return(
        <div className="Burger">
            <BurgerIngredient type='bread-top' />
            {transformedIngredients}
            <BurgerIngredient type='bread-bottom' />
        </div>
    );
}

burger.propTypes = {
    ingredients: PropTypes.object.isRequired
};

export default burger;
