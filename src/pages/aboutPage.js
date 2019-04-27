import React from 'react'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import Head from '../components/Head.jsx'
import About from '../components/About.jsx'

function AboutPage() {
  return (
    <div className="root">
      <Head />
      <Header/>
      <About/>
      <Footer/>  
    </div>
  );
}

export default AboutPage
