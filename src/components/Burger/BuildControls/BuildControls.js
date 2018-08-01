import React from 'react';
import PropTypes from 'prop-types';
import './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' },
];

const buildControls = (props) => (
    <div className="BuildControls">
        <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>
        {controls.map(ctrl => (
            <BuildControl
                key={ctrl.label}
                label={ctrl.label}
                disabled={props.disabled[ctrl.type]}
                added={() => props.ingredientAdded(ctrl.type)}
                removed={() => props.ingredientRemoved(ctrl.type)} />
        ))}
        <button
            disabled={!props.purchaseable}
            className="OrderButton"
            onClick={props.ordered}>
            Checkout
        </button>
    </div>
);

buildControls.propTypes = {
    price: PropTypes.number.isRequired,
    purchaseable: PropTypes.bool.isRequired,
    disabled: PropTypes.object.isRequired,
    ordered: PropTypes.any.isRequired,
    ingredientAdded: PropTypes.any.isRequired,
    ingredientRemoved: PropTypes.any.isRequired
};

export default buildControls;
