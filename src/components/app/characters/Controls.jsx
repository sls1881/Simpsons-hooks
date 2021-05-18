import React from 'react';
import PropTypes from 'prop-types';

function Controls({ onClick }) {
  return (
    <div>
      <h2>Get a Quote</h2>
      <button aria-label="fetch-button" onClick={onClick}>
        Fetch
      </button>
    </div>
  );
}

Controls.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Controls;
