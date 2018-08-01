import React from 'react';
import PropTypes from 'prop-types';
import './BuildControl.css';

const buildControl = (props) => (
    <div className="BuildControl">
        <div className="Label">{props.label}</div>
        <button
            className="Less"
            disabled={props.disabled}
            onClick={props.removed}>Less
        </button>
        <button className="More" onClick={props.added}>More</button>
    </div>
);

buildControl.propTypes = {
    disabled: PropTypes.bool.isRequired,
    added: PropTypes.any.isRequired,
    removed: PropTypes.any.isRequired
};

export default buildControl;
 