import React from 'react'
import carsData from '../static/carsData.js'


const AboutCar = props => {
  const id = props.match.params.id

  const carInfo = carsData.filter(car => Number(car.id) === Number(id))[0]

  return (
    <div className="aboutCar">
      <div className="img">
        <img src={carInfo.img} alt=""/>
      </div>
      <div className="info">
        <h1>{carInfo.name}</h1>
        <h2 className='year'>{carInfo.year}</h2>
        <span>
          <h2>Привід: </h2>
          <h3>{carInfo.privod}</h3>
        </span>
        <span>
          <h2>Двигун: </h2>
          <h3>{carInfo.motor}</h3>
        </span>
        <span>
          <h2>Ціна: </h2>
          <h3>{carInfo.price}</h3>
        </span>
        <span>
          <h2>Клас: </h2>
          <h3>{carInfo.class}</h3>
        </span>
        <span>
          <h2>Тип: </h2>
          <h3>{carInfo.type}</h3>
        </span>
        <span>
          <h2>Розхід: </h2>
          <h3>{carInfo.fuel}</h3>
        </span>
        <span>
          {carInfo.info}
          {/* <b>Audi R8</b> — середньомоторний повнопривідний спортивний автомобіль класу суперкар, вироблений німецьким автовиробником Audi, вперше представлений в 2006 році на Паризькому автосалоні (Paris Motor Show). В основі дизайну Audi R8 базується на концепт-карі Audi LeMans quattro 2003 року, який був показаний на Женевському і Франкфуртському автосалонах того року. */}
        </span>
      </div>
    </div>
  )
} 

export default AboutCar