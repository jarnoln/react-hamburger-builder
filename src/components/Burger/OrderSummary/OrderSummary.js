import React from 'react';
import PropTypes from 'prop-types';
import Aux from '../../../hoc/Aux'

// import './Modal.css';

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(ingKey => <li key={ingKey}>{ingKey}: {props.ingredients[ingKey]}</li>);

    return (
        <Aux className="OrderSummary">
            <h3> Your order </h3>
            <p> A delicious burger with following ingredients: </p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Continue to checkout?</p>
        </Aux>
    );
};

orderSummary.propTypes = {
    ingredients: PropTypes.object.isRequired
};

export default orderSummary;
