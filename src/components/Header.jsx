import React from 'react'
import style from '../styles/Header.module.css'
const Header= () => {
  return (
    <div className={style.header_container}>
      <img className={style.h1} src="https://static.xx.fbcdn.net/rsrc.php/y1/r/4lCu2zih0ca.svg" alt="" srcset="" />
      <h2 className={style.h2}>Connect with friends and the world around you on Facebook.</h2>
    </div>
  )
}

export default Header
