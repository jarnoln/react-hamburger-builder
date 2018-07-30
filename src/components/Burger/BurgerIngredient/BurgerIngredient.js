import React from 'react';

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

export default burgerIngredient;
