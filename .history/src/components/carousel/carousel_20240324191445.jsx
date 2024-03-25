import React, { useState } from "react";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import kakashi from '../../media/kakashi_susanoo.jpg';
import sasuke from '../../media/sasuke.jpg';
import vegeta from '../../media/majin-vegeta.png';
import 
const WorkCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    { original: kakashi, thumbnail: kakashi },
    { original: sasuke, thumbnail: sasuke },
    { original: vegeta, thumbnail: vegeta },
  ];

  const applyStylesAfterExitFullscreen = () => {
    // Apply the specified CSS styles to the image element
    const image = document.querySelector('.image-gallery-slide .image-gallery-image');
    if (image) {
      image.style.height = '600px';
      image.style.objectFit = 'cover';
      image.style.width = '90vw';
    }
  };

  const handleSlide = (index) => {
    setCurrentIndex(index);
  };

  const handleScreenChange = (fullscreenElement) => {
    if (!fullscreenElement) {
      // If fullscreen mode is exited, apply styles to the image
      applyStylesAfterExitFullscreen();
    }
  };

  return (
    <div className="work-container">
      <h2 className="title-text bold-700">{images.length} photos</h2>
      <p className="description-text">Click on arrows to view more</p>
      <div className="">
        <ImageGallery
          items={images}
          showThumbnails={false}
          showPlayButton={false}
          showFullscreenButton={true}
          onSlide={handleSlide}
          onScreenChange={handleScreenChange}
        />
      </div>
    </div>
  );
};

export default WorkCarousel;
