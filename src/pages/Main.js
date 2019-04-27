import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Header(){
  return(
    <Router>
      <Route exact path='/' component={carsPage} />
      <Route exact path='/aboutCompany' component={aboutCompany} />
      <Route exact path='/cars' component={carsPage} />
    </Router>
  )
}

export default Header