import React from 'react';
import PropTypes from 'prop-types';

const SwatchCard = (props) => {
  // Base Case
  var cardStyle = 'swatch-card';

  if (props.cardSize === 'small') {
    cardStyle = 'swatch-card swatch-card--small';
  } else if (props.cardSize === 'large') {
    cardStyle = 'swatch-card swatch-card--large';
  }

  return (
    <div className={cardStyle}>
      <div className="swatch-card__color" style={{ backgroundColor: props.hexcode }}/>
      <div className="swatch-card__text">
        {props.hexcode.toLowerCase()}
      </div>
    </div>
  );
};

SwatchCard.propTypes = {
  hexcode: PropTypes.string.isRequired,
  size: PropTypes.string,
};

SwatchCard.defaultTypes = {
  cardSize: 'normal',
}

export default SwatchCard;
