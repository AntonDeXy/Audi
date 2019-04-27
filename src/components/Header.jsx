import React from 'react'
import logo from '../static/logo.png'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

function Header(){
  return(
    <header>
      <Link to='/'>
        <img src={logo} alt=""/>
      </Link>
      <nav>
        <div>
          <Link to="/history">
              Історія компанії
          </Link>
        </div>
        <div>
          <Link to='/'>
            Машини
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default Header