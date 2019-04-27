import React from 'react'
import Card from '../components/Card.jsx'
import carsData from '../static/carsData.js'

function Cars () {
  return(
    <div className="cars">
     {carsData.map(car=>(
        <Card
          name={car.name}
          img={car.img}
          year={car.year}
          privod={car.privod}
          motor={car.motor}
          price={car.price}
          type={car.type}
          fuel={car.fuel}
          class={car.class}
          info={car.info}
        />
      ))}
    </div> 
  )
}
export default Cars