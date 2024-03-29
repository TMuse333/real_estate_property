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

function App() {
  const [count, setCount] = useState(0)

  const images = [
    {
      url:kakashi,
      alt:'Kakashi'
    }
   ,{
    url:sasuke,
    alt:'Sasuke'
   },
   {
    url:vegeta,
    alt:'Vegeta'
   },
   {
    url:kakashi,
    alt:'Kakashi2'
  }
 ,{
  url:sasuke,
  alt:'Sasuke2'
 },
 {
  url:vegeta,
  alt:'Vegeta2'
 },
    
  ]

  const links = [
    'home',
    'description',
    'price and features',
    'amenities',
    'photo gallery',
    'video',
    'more info',
    'flyers',
    'area info',
    'documents',
    'map',
    'Broker',
    'More Listings',
    'Show Bookings'
  ]

  return (
    <>
    <div className='homepage-container'>

   
   
   
    <Property
    heroImage={heroHome}/>
  
     </div>
    </>
  )
}

export default App
