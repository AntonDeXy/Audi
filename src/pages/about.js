import React from 'react'
import './static/style.scss'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Head from './components/Head.jsx'

function App() {
  return (
    <div className="root">
      <Head />
      <Header/>
      <Footer/>  
    </div>
  );
}

export default App;
