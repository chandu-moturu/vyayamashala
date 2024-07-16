import React from 'react'
import './stories.css'
import samplestory from '../../assets/sample-story.svg'
import star5 from '../../assets/5-stars.svg'
import leftquote from '../../assets/left-quote.svg'
import rightquote from '../../assets/right-quote.svg'
import leftarrow from '../../assets/left-arrow.svg'
import rightarrow from '../../assets/right-arrow.svg'

const Stories = () => {
  return (
    <div className="stories-main" id='reviews'>
      <h1>Stories of our <br/>
        <span style={{ color: "#FCF43D" }}>Vyayamashala</span> Family
      </h1>
      <div className='stories-controllers'>
        <img src={leftarrow} alt="" />
        <img src={rightarrow} alt="" />
      </div>
      <div className="stories-content">
        <div className="stories-hero">
          <img src={samplestory} alt="" />
          <span style={{display:'flex',justifyContent:'space-around'}}><p>After</p> <p>before</p></span>
        </div>
        <div className="stories-info">
            <img src={leftquote} alt=""  style={{width:'24px'}}/>
          <p className='stories-message'>
            A complete package to all the fitness freaks out there. Join soon
            and test yourself. Vyayamashala’s layouts, environment and it’s
            surrounding itself plays vital role to motivate and go beyond your
            limitation.
          </p>
            <img src={rightquote} alt="" style={{width:'24px', paddingLeft:'90%'}} />
          <img src={star5} alt="" />
          <p>Jhon Doe, Student</p>
        </div>
      </div>
    </div>
  );
}

export default Stories