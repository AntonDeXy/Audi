import React from 'react'
import Card from '../components/Card.jsx'
import carsData from '../static/carsData.js'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import AboutCar from './AboutCarPage'

function Cars () {
  return(
    <Router>
      <div className="cars">
      {carsData.map(car=>(
        <Link to={`/car/${car.id}`} >
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
        </Link>
        ))}
      </div> 
      <Route exact path='/car/:id' component={AboutCar} />

    </Router>

  )
}
export default Cars