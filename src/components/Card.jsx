import React from 'react'

const Card = props => {
  return(
    <div className='card'>
      <img src={props.img} alt=""/>
      <div>
        <h2>{props.name}</h2>
      </div>
    </div>
  )
}

export default Card