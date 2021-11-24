import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import PropTypes from 'prop-types';
import GifGridItem from './GifGridItem';

const GifGrid = ({ category }) => {
  const { data: images, loading } = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>
      {loading && <p className="animate__pulse">Loading...</p>}
      <div className="card-grid">
        {images.map((img) => (
          <GifGridItem {...img} key={img.id} />
        ))}
      </div>
    </>
  );
};

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
};

export default GifGrid;
