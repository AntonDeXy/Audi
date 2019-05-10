import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import Head from './components/Head.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Cars from './components/Cars.jsx'
import About from './components/About'
import History from './components/History.jsx'
import AboutCarPage from './components/AboutCarPage'
import carsData from './static/carsData.js'
import style from './static/style.scss'

function App(){
  return(
    <Router>
      <Header />
      <Head />

      <Route exact path='/' component={CarsPage} />
      <Route path='/aboutCompany' component={aboutCompany} />
      <Route path='/history' component={historyCompany} />
      <Route path='/car/:id' component={AboutCarPage} />

      <Footer />
    </Router>
    
  )
}

const CarsPage = props =>(
  <div className="root">
    <Cars />
  </div>
)

const aboutCompany = props =>(
  <div className="root">
    <About />
  </div>
)

const historyCompany = props =>(
  <div className="root">
    <History />
  </div>
)

export default App