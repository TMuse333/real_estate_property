import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar/navbar'
import ImageCarousel from './components/carousel/carousel'

function App() {
  const [count, setCount] = useState(0)

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
     <Navbar
     links={links}
     />
     <ImageCarousel/>
    </>
  )
}

export default App
