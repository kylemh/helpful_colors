import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  const disabledClass = props.isDisabled ? 'button--disabled' : '';

  return (
    <button
      onClick={props.clickAction}
      disabled={props.isDisabled}
      className={`button ${disabledClass} ${props.className}`}
      style={props.style}
      aria-label={`${props.text} button`}
    >
      {props.text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  clickAction: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.object,
};

Button.defaultTypes = {
  isDisabled: false,
  className: "",
  style: {},
}

export default Button;
