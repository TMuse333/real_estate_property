import React, { useState, useEffect, useRef } from "react";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import kakashi from '../../media/kakashi_susanoo.jpg';
import sasuke from '../../media/sasuke.jpg';
import vegeta from '../../media/majin-vegeta.png';

const WorkCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    { original: kakashi, thumbnail: kakashi },
    { original: sasuke, thumbnail: sasuke },
    { original: vegeta, thumbnail: vegeta },
  ];

  useEffect(() => {
    const handleFullscreenChange = () => {
      applyStylesAfterExitFullscreen();
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);

    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);

  const applyStylesAfterExitFullscreen = () => {
    // Get the container element
    const container = document.querySelector('.work-container .image-gallery-content');
    if (container) {
      // Get the slide element inside the container
      const slide = container.querySelector('.image-gallery-slide');
      if (slide) {
        // Apply the specified CSS styles
        const image = slide.querySelector('.image-gallery-image');
        if (image) {
          image.style.height = '600px';
          image.style.objectFit = 'cover';
          image.style.width = '90vw';
        }
      }
    }
  };

  const handleSlide = (index) => {
    setCurrentIndex(index);
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
        />
      </div>
    </div>
  );
};

export default WorkCarousel;
