import react, {useState} from 'react'
import kakashi from '../../media/kakashi_susanoo.jpg';
import sasuke from '../../media/sasuke.jpg';
import vegeta from '../../media/majin-vegeta.png';



const Carousel2 = () => {

    const [imageIndex, setImageIndex]

    const images = [
        kakashi,
        sasuke,
        vegeta
    ]

    return (
        <div className='carousel2-container'>
            <img src={images[imageIndex]}
        </div>
    )
}
