import React from 'react';
import './Backdrop.css';

const backdrop = (props) => (
    <div
        className="Backdrop"
        // vh refers to viewport height. -100vh is above viewport.
        style={{
            transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: props.show ? '1' : '0'
        }}>
        {props.children}
    </div>
);

export default backdrop;
