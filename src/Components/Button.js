import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  return (
    <button
      onClick={props.clickAction}
      disabled={props.isDisabled}
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
};

Button.defaultTypes = {
  isDisabled: false,
}

export default Button;
