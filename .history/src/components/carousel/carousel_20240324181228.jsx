import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles
import kakashi from '../../media/kakashi_susanoo.jpg'
import sasuke from '../../media/sasuke.jpg'
import vegeta from '../../media/majin-vegeta.png'


const ImageCarousel = ({images}) => {
  return (
    <Carousel>
      <div>
        <img src={kakashi} alt="Image 1" />
        <p className="legend">Caption 1</p>
      </div>
      <div>
        <img src="image2.jpg" alt="Image 2" />
        <p className="legend">Caption 2</p>
      </div>
      {/* Add more slides as needed */}
    </Carousel>
  );
};

export default ImageCarousel;
