/* eslint-disable react/button-has-type */
import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Button = ({ className, type, children, onClick }) => (
  <button className={`btn ${className}`} type={type} onClick={onClick}>
    {children}
  </button>
);

Button.propTypes = {
  className: PropTypes.string,
  type: PropTypes.oneOf(['button', 'submit']),
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

Button.defaultProps = {
  type: 'button',
  className: '',
};

export default Button;
