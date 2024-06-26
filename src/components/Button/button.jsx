import React from 'react';
import PropTypes from 'prop-types';
import './button.css';

export const Button = ({ onClick }) => {
  return (
    <button type="button" className="button" onClick={onClick}>
      Load more
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};