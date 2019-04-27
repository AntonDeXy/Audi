import React from 'react'
import logo from '../static/logo.png'

function Header(){
  return(
    <header>
      <img src={logo} alt=""/>
      <nav>
        <div>
          <a href="#">Історія компанії</a>
        </div>
        <div>
          <a href="#">Машини</a>
        </div>
      </nav>
    </header>
  )
}

export default Header