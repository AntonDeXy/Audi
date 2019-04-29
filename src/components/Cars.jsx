import React from 'react'
import Card from '../components/Card.jsx'
import carsData from '../static/carsData.js'

function Cars () {
  return(
    <div className="cars">
      {carsData.map(car=>(
        <Card
          index={car.id}
          id={car.id}
          name={car.name}
          img={car.img}
        />
      ))}
    </div> 
  )
}
export default Cars