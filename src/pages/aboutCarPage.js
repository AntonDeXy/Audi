import React from 'react'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import Head from '../components/Head.jsx'
import AboutCarPage from '../components/AboutCarPage'

function AboutPage() {
  return (
    <div className="root">
      <Head />
      <Header/>
      <AboutCarPage/>
      <Footer/>  
    </div>
  );
}

export default AboutPage
