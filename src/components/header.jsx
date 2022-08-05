import React, { useState, useEffect } from 'react'
import GifContainer from './gifContainer';
import { getUrl } from '../utils/getUrl';
import { fetchGifs } from '../utils/fetchGifs';

const Header = () => {
  const [search, setSearch] = useState('');
  const [searchScroll, setSearchScroll] = useState('');
  const [page, setPage] = useState(1);
  const [gifs, setGifs] = useState(null);

  let url;

  const handleSearch = (e) => {
    setSearch(e.target.value)
    setGifs(null);
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    url = getUrl(search, page);
    let content = await fetchGifs(url) 
    setGifs(content?.data);
    setSearchScroll(search)
    setSearch('');
    setPage(prevPage => prevPage + 1);
  };
  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  })
    
  const handleScroll = async (e) => {
    const top = e.target.documentElement.scrollTop;
    const innerHeight = window.innerHeight;
    const height = e.target.documentElement.scrollHeight;
    if ((top + 1) + innerHeight >= height){
      url = getUrl(searchScroll, page)
      const newContent = await fetchGifs(url)
      const data = newContent.data
      setGifs(prevGifs => [ ...prevGifs, ...data ])
      setPage(prevPage => prevPage + 1);
    }
  }

  return (
    <div className="container">
      <div className="header">
        <form className="search" onSubmit={handleSubmit}>
          <input
            className="search_input" 
            type="text"
            value={search} 
            placeholder="Search for a GIF"
            onChange={(e) => handleSearch(e)}
          />
          <input 
            className="search_btn"
            type="submit"
            value="Go"
          />
        </form>
      </div>
      <GifContainer gifs={gifs} />
    </div> 
  )
}

export default Header;