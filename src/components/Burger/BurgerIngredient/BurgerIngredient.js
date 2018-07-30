import React from 'react';
import PropTypes from 'prop-types';

const burgerIngredient = (props) => {
    let ingredient = null;
    switch (props.type) {
        case('bread-bottom'):
            ingredient = <div className="BreadBottom"></div>;
            break;
        case('bread-top'):
            ingredient = (
                <div className="BreadTop">
                    <div className="Seeds1"></div>
                    <div className="Seeds2"></div>
                </div>
            );
            break;
    }
}

burgerIngredient.PropTypes = {
    type: PropTypes.string.isRequired
};

export default burgerIngredient;
