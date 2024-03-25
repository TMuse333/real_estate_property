import react, {useState} from 'react'
import kakashi from '../../media/kakashi_susanoo.jpg';
import sasuke from '../../media/sasuke.jpg';
import vegeta from '../../media/majin-vegeta.png';
import { ArrowBigLeft, ArrowBigRight } from 'lucide-react';



const Carousel2 = () => {

    const [imageIndex, setImageIndex] = useState(0)

    const images = [
        kakashi,
        sasuke,
        vegeta
    ]

    return (
        <div className='carousel2-container'
            style={{
                height:'500px',
                width:'100vw',
                max
            }}
        >
            <img src={images[imageIndex]}
                style={{
                    height:'100%',
                    width:'100%'
                }}
            />
            <ArrowBigLeft/>
            <ArrowBigRight/>
        </div>
    )
}

export default Carousel2
