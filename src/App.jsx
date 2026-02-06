import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Weathercard from './components/Weathercard'

const App = () => {

  const [passcity, setpasscity] = useState(null)

  const handlechange = (city) =>{
    setpasscity(city)
  }
  return (
    <div className='bg-blue-800 h-screen'>
      <Navbar handlechange={handlechange}/>
      <Weathercard city={passcity}/>
    </div>
  )
}

export default App
