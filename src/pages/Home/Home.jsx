import React from 'react'
import homehero from '../../assets/home-hero.svg'
import playbutton from '../../assets/play-button.svg'
import './home.css'

const Home = () => {
  return (
    <div className="home-main" id='home'>
      <div className="home-content">
        <h1>Join the world of fitness. </h1>
        <p>
          Our aim is to bring more people into fitness so that every indivisual,
          family,society and whole nation.
        </p>
        <div className="home-links">
          <button>Join Now</button>
          <div className='video'>
            <img src={playbutton} alt="" /> <p>Watch video</p>
          </div>
        </div>
        <div className="home-stats">
            <div>
                <h2>7</h2>
                <p>Years</p>
                <p>Experience</p>
            </div>
            <div>
                <h2>25k+</h2>
                <p>Happy</p>
                <p>Customers</p>
            </div>
            <div>
                <h2>95</h2>
                <p>Gym</p>
                <p>Trainers</p>
            </div>
        </div>
      </div>
      <div className="home-hero">
        <img src={homehero} alt="" />
      </div>
    </div>
  );
}

export default Home