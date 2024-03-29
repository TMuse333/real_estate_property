import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar/navbar'
import ImageCarousel from './components/carousel/carousel'
import Carousel2 from './components/carousel2/carosuel2'


import kakashi from './media/kakashi_susanoo.jpg';
import sasuke from './media/sasuke.jpg';
import vegeta from './media/majin-vegeta.png';
import Property from './components/property/property'

import heroHome from './media/rooftight-2.png'

import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Homepage from './components/homepage/homepage'
import NewPage from './components/newPage/newPage'

function App() {
  const [count, setCount] = useState(0)

  

  return (
    <>
   <Routes>
      <Route path='/'
      element={<Homepage/>}
      />

      <Route path='property'
      element={<Property/>}
      />

      <Route path='new-page'
      element={<NewPage/>}
      ></Route>


   </Routes>
    </>
  )
}

export default App
