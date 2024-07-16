// import React from 'react'
import './services.css'
import services from '../../assets/services.png'

const Services = () => {
  return (
    <div className="services-main" id='services'>
      <div className="services-content">
        <p className='services-header'>Services</p>
        <h2>We provide service that fits the best for you.</h2>
        <p>
          Strive for greatness with the best, around the best and in the best
          fitness environment available in the city.
        </p>
        <button>See All</button>
      </div>
      <div className="services-hero">
        <img src={services} alt="" width={480}/>
      </div>
    </div>
  );
}

export default Services