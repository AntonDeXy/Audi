import React from 'react'
import img from '../static/cars/r8.jpg'
import carsData from '../static/carsData.js'

const AboutCar = props =>{
  return(
    <div className="aboutCar">
      <div className="img">
        <img src={props.img} alt=""/>
      </div>
      <div className="info">
        <h1>{props.name}</h1>
        <h2 className='year'>{props.year}</h2>
        <span>
          <h2>Привід: </h2>
          <h3>{props.privod}</h3>
        </span>
        <span>
          <h2>Двигун: </h2>
          <h3>{props.motor}</h3>
        </span>
        <span>
          <h2>Ціна: </h2>
          <h3>{props.price}</h3>
        </span>
        <span>
          <h2>Клас: </h2>
          <h3>{props.class}</h3>
        </span>
        <span>
          <h2>Тип: </h2>
          <h3>{props.type}</h3>
        </span>
        <span>
          <h2>Розхід: </h2>
          <h3>{props.fuel}</h3>
        </span>
        <span>
          {props.info}
          {/* <b>Audi R8</b> — середньомоторний повнопривідний спортивний автомобіль класу суперкар, вироблений німецьким автовиробником Audi, вперше представлений в 2006 році на Паризькому автосалоні (Paris Motor Show). В основі дизайну Audi R8 базується на концепт-карі Audi LeMans quattro 2003 року, який був показаний на Женевському і Франкфуртському автосалонах того року. */}
        </span>
      </div>
    </div>
  )
} 

export default AboutCar