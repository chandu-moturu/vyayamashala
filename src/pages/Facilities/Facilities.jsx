import React from 'react'
import './facilities.css'
import locker from '../../assets/sample-locker.svg'
import wifi from '../../assets/sample-wifi.svg'
import drinks from '../../assets/sample-drinks.svg'
import gym from '../../assets/sample-gym.svg'
import changingroom from '../../assets/sample-changing-room.svg'
import trainer from '../../assets/sample-personal-trainer.svg'

const Facilities = () => {
  const data = [
    {
      id: 1,
      image: locker,
      title: "Lockers and towels",
      message: "Clean, safe and sanitary environment to keep your stuffs.",
    },
    {
      id: 2,
      image: wifi,
      title: "Free Wifi",
      message: "Stay connected to the world while you work yourself out.",
    },
    {
      id: 3,
      image: drinks,
      title: "Complimentary Drinks",
      message:
        "We make sure that you stay hydrated so that you can push yourself to the limit.",
    },
    {
      id: 4,
      image: gym,
      title: "Hightech Gym",
      message:
        "Build yourself with the best available equipments in the market.",
    },
    {
      id: 5,
      image: changingroom,
      title: "Changing Room",
      message: "Sanitary changing room with proper privacy.",
    },
    {
      id: 6,
      image: trainer,
      title: "Personal Trainer",
      message: "You benefit from the monthly care of a Personal Trainer.",
    },
  ];
  return (
    <div className='facilities-main'>
      <h1>
        Our <span style={{color:'#FCF43D'}}>facilities</span>
      </h1>
      <div className='facilities-cards'>
        {data.map((data)=>(
          <div key={data.id} className='card'>
            <div className="facilities-cards-img">
              <img src={data.image} alt="" />
            </div>
            <div className="facilities-cards-content">
              <h4>{data.title}</h4>
              <p>{data.message}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Facilities