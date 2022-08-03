import React, { useState } from 'react'

const Header = () => {
  const [search, setSearch] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(search);
  };

  return (
    <div className="header">
      <form className="search" onSubmit={handleSubmit}>
        <input
          className="search_input" 
          type="text"
          value={search} 
          placeholder="Search for a GIF"
          onChange={(e) => setSearch(e.target.value)}
        />
        <input 
          className="search_btn"
          type="submit"
          value="Go"
        />
      </form>
    </div>
  )
}

export default Header