import React from 'react';
import PropTypes from 'prop-types'; 

const propTypes = {
  onClick: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
}

export const Button = (props) => (
  <button 
    type='button'
    className='btn btn-primary'
    onClick={props.onClick}
  >
    {props.label}
  </button>
);
Button.propTypes = propTypes;

export const ButtonOn = (props) => (
  <button 
    type='button'
    className='btn btn-success'
    onClick={props.onClick}
  >
    {props.label}
  </button>
);
ButtonOn.propTypes = propTypes;

export const ButtonOff = (props) => (
  <button 
    type='button'
    className='btn btn-danger'
    onClick={props.onClick}
  >
    {props.label}
  </button>
);
ButtonOff.propTypes = propTypes;

export const ButtonGroup = (props) => (
  <div className="btn-group">
    {props.children}
  </div>
)
