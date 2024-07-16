import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from '../pages/Home/Home'
import Services from '../pages/Services/Services'
import Contact from '../pages/Contact/Contact'
// import Facilities from '../pages/Facilities/Facilities'
import Stories from '../pages/Stories/Stories'
import Trainers from '../pages/Trainers/Trainers'

const Router = () => {
  return (
    <Routes>
        <Route path='/' Component={Home}/>
        {/* <Route path='/about' Component={Home}/> */}
        <Route path='/reviews' Component={Stories}/>
        <Route path='/team' Component={Trainers}/>
        <Route path='/services' component={Services}/>
        <Route path='/contact' Component={Contact}/>
    </Routes>
  )
}

export default Router