import React from 'react';
import uuid from 'react-uuid'
import GifItem from './gifItem';

const GifContainer = ({ gifs }) => {
 
  if (gifs){
    return (
      <div className="gifs_container">
        {gifs.map(gif => <GifItem key={uuid()} gif={gif} />)}
      </div>
    )
  } 
}

export default GifContainer;