import React from 'react';
import PropTypes from 'prop-types'; //impt
const GifGridItem = ({ title, url }) => {
  return (
    <div className="card animate__animated animate__bounce">
      <img src={url} alt={title} />
      <p>{title}</p>
    </div>
  );
};

GifGridItem.prototype = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default GifGridItem;
