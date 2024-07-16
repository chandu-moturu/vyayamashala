import React from 'react'
import './trainers.css'
import trainer1 from '../../assets/sample-trainer1.svg'
import trainer2 from '../../assets/sample-trainer2.svg'
import trainer3 from '../../assets/sample-trainer3.svg'
import trainer4 from '../../assets/sample-trainer4.svg'
import trainer5 from '../../assets/sample-trainer5.svg'
import trainer6 from '../../assets/sample-trainer6.svg'

const data = [
  {
    id: 1,
    image: trainer1,
    name: "Amir Shrestha",
  },
  {
    id: 2,
    image: trainer2,
    name: "Christina Thapa",
  },
  {
    id: 3,
    image: trainer3,
    name: "Sunil Chetri",
  },
  {
    id: 4,
    image: trainer4,
    name: "Priya K.C",
  },
  {
    id: 5,
    image: trainer5,
    name: "Santosh Adhikari",
  },
  {
    id: 6,
    image: trainer6,
    name: "Rina Pun",
  },
];

const Trainers = () => {
  return (
    <div className='trainers-main' id='team'>
      <h1>
        Meet our <span style={{ color: "#FCF43D" }}>Trainers</span>
      </h1>
      <div className='trainers-cards'>
        {data.map((data)=>(
          <div key={data.id}>
            <div className="card">
              <img src={data.image} alt="" />
              <p>{data.name}</p>
            </div>
            
          </div>
        ))}
      </div>
    </div>
  );
}

export default Trainers