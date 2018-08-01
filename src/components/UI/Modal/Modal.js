import React from 'react';
import PropTypes from 'prop-types';
import './Modal.css';

const modal = (props) => (
    <div className="Modal">
        {props.children}
    </div>
);

modal.propTypes = {
};

export default modal;
 