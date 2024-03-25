import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles

const ImageCarousel = () => {
  return (
    <Carousel>
      <div>
        <img src="image1.jpg" alt="Image 1" />
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
