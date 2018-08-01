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
    {controls.map(ctrl => (
        <BuildControl
            key={ctrl.label}
            label={ctrl.label}
            disabled={props.disabled[ctrl.type]}
            added={() => props.ingredientAdded(ctrl.type)}
            removed={() => props.ingredientRemoved(ctrl.type)} />
    ))}
    </div>
);

buildControls.propTypes = {
    disabled: PropTypes.object.isRequired,
    ingredientAdded: PropTypes.any.isRequired,
    ingredientRemoved: PropTypes.any.isRequired
};

export default buildControls;
