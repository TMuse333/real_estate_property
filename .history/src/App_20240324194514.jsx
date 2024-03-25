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

function App() {
  const [count, setCount] = useState(0)

  const images = [
    {
      url:kakashi
    }
    kakashi,
    sasuke,
    vegeta
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

   
     {/* <Navbar
     links={links}
     /> */}
   
    <Carousel2
    images={images}/>
     </div>
    </>
  )
}

export default App
