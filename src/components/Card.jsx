import React from 'react'
import { Link } from "react-router-dom"

const Card = ({ id, img, name }) => (
  <Link to={`/car/${id}`} >
    <div className='card'>
      <img src={img} alt=""/>
      <div>
        <h2>{name}</h2>
      </div>
    </div>
  </Link>
)

export default Card