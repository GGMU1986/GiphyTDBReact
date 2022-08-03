import React from 'react'

const Header = () => {
  return (
    <div className="header">
      <div className="search">
        <input type="text" placeholder="Search"/>
        <button className="search_btn">Go</button>
      </div>
    </div>
  )
}

export default Header