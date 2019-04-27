import React from 'react'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import Head from '../components/Head.jsx'
import Cars from '../components/Cars'

function AboutPage() {
  return (
    <div className="root">
      <Head />
      <Header/>
      <Cars/>
      <Footer/>  
    </div>
  );
}

export default AboutPage
