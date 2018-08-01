import React from 'react';
import PropTypes from 'prop-types';
import './Modal.css';

const modal = (props) => (
    <div
        className="Modal"
        // vh refers to viewport height. -100vh is above viewport.
        style={{
            transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: props.show ? '1' : '0'
        }}>
        {props.children}
    </div>
);

modal.propTypes = {
};

export default modal;
