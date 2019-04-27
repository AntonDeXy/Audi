import React from 'react'
import img from '../static/cars/r8.jpg'

const AboutCar = props =>{
  return(
    <div className="aboutCar">
      <div className="img">
        <img src={img} alt=""/>
      </div>
      <div className="info">
        <h1>Audi R8</h1>
        <h2 className='year'>2018</h2>
        <span>
          <h2>Привід: </h2>
          <h3>Повний</h3>
        </span>
        <span>
          <h2>Двигун: </h2>
          <h3>V10 5.2L</h3>
        </span>
        <span>
          <h2>Ціна: </h2>
          <h3> ~120.000$</h3>
        </span>
        <span>
          <h2>Клас: </h2>
          <h3>Спорткар</h3>
        </span>
        <span>
          <h2>Тип: </h2>
          <h3>Купе</h3>
        </span>
        <span>
          <h2>Розхід: </h2>
          <h3> 35L/100km</h3>
        </span>
        <span>
          <b>Audi R8</b> — середньомоторний повнопривідний спортивний автомобіль класу суперкар, вироблений німецьким автовиробником Audi, вперше представлений в 2006 році на Паризькому автосалоні (Paris Motor Show). В основі дизайну Audi R8 базується на концепт-карі Audi LeMans quattro 2003 року, який був показаний на Женевському і Франкфуртському автосалонах того року.
        </span>
      </div>
    </div>
  )
} 

export default AboutCar