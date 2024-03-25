import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css'; // Import carousel styles
import kakashi from '../../media/kakashi_susanoo.jpg';
import sasuke from '../../media/sasuke.jpg';
import vegeta from '../../media/majin-vegeta.png';

const Carousel2 = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <Slider {...settings}>
      <div>
        <img src={kakashi} alt="Image 1" />
        <p className="legend">Caption 1</p>
      </div>
      <div>
        <img src={vegeta} alt="Image 2" />
        <p className="legend">Caption 2</p>
      </div>
      {/* Add more slides as needed */}
    </Slider>
  );
};

export default Carousel2;
