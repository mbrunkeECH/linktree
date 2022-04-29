import React from 'react'
import './Header.css'

const Header = ({ userName, userImage }) => {
  return (
    <div className='header'>
      <img src={userImage} alt="" className='profilepic' />
      <p>@{userName}</p>
    </div>
  )
}

export default Header