import React from 'react';
import PropTypes from 'prop-types';

function Display({ name, image, text }) {
  return (
    <div>
      <h2>{name}</h2>
      <img alt={name} src={image} />
      <p>{text}</p>
    </div>
  );
}

Display.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Display;
