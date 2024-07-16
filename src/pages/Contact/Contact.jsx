// import React from 'react'
import './contact.css'
import contactimg from '../../assets/contact-img.svg'

const Contact = () => {
  return (
    <div className="contact-main" id='contact'>
      <h1>
        What’s <span style={{ color: "#FCF43D" }}>Stopping</span> you?
      </h1>
      <div className="contact-content">
        <img src={contactimg} alt="" />
        <div className="contact-form">
          <h2>Become a part of our family</h2>
          <p>Leave your details and we will get back to you !</p>
          <form action="">
            <input type="text" placeholder='Full name'/>
            <input type="number" placeholder='Phone number'/>
          </form>
            <button type='submit'>Join Now</button>
        </div>
      </div>
    </div>
  );
}

export default Contact