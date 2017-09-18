import React from 'react';
import PropTypes from 'prop-types';

function SwatchCard(props) {
  return (
    <div className="swatchCard">
      <div className="swatchCard__color" style={{ backgroundColor: props.hexcode }}/>
      <div className="swatchCard__text">
        {props.hexcode.toLowerCase()}
      </div>
    </div>
  );
};

SwatchCard.propTypes = {
  hexcode: PropTypes.string.isRequired,
  isSelected: PropTypes.bool,
};

SwatchCard.defaultTypes = {
  isSelected: false,
}


export default SwatchCard;
