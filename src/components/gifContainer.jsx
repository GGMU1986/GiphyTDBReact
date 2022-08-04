import React from 'react';
import uuid from 'react-uuid'
import GifItem from './gifItem';
import Masonry from 'react-masonry-css';

const GifContainer = ({ gifs }) => {
 
  if (gifs){
    return (
      <Masonry
        breakpointCols={4}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {gifs.map(gif => <GifItem key={uuid()} gif={gif} />)}
      </Masonry>
    )
  } 
}

export default GifContainer;