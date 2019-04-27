import React from 'react'
import './static/style.scss'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Head from './components/Head.jsx'
import About from './components/About.jsx'
import aboutData from './static/aboutData.js'
import carsData from './static/carsData.js'
import Cars from './components/Cars.jsx'
import AboutCar from './components/AboutCar.jsx'

function App() {
  return (
    <div className="root">
      <Head />
      <Header/>
      {/* {aboutData.map(about => (<About info = {about.info} /> ))} */}
      {/* <Cars /> */}
      <AboutCar />
      <Footer/>  
    </div>
  );
}

export default App;
