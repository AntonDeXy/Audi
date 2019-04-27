import React from 'react'
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser'

function About (props) {
  return (
    <div className="about">
      {ReactHtmlParser(props.info)}
    </div>
  )
}

export default About
