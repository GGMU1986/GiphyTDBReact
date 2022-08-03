import React from 'react';
import GifItem from './gifItem';

const GifContainer = ({ gifs }) => {
  console.log(gifs?.data)
  const data = gifs?.data;
  if (data){
    return (
      <div className="gifs_container">
        {data.map(gif => <GifItem key={gif.id} gif={gif} />)}
      </div>
    )
  } 
}

export default GifContainer;