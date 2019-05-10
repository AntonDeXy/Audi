import React from 'react'
import { Link } from "react-router-dom"

const Card = ({ id, img, name }) => (
  <Link to={`/car/${id}`} >
    <div className='card'>
    <div>
      <img src={img} alt="" />
    </div>
      <div className='car_name'>
        <h2>{name}</h2>
      </div>
    </div>
  </Link>
)

export default Card