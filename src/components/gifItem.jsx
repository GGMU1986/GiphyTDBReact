import React from 'react';

const GifItem = ({ gif }) => {
  return (
    <div className="gif_item">
      <img src={gif.images.downsized.url} alt="gif" /> 
    </div>
  )
}

export default GifItem;