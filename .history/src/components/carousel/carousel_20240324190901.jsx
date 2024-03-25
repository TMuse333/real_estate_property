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
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5 // When 50% of the video is in view
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setPlaying(true);
      } else {
        setPlaying(false);
      }
    });
  }, options);

  // Start observing the video element
  const videoElement = videoRef.current;
  if (videoElement) {
    observer.observe(videoElement);
  }

  return () => {
    if (videoElement) {
      observer.unobserve(videoElement);
    }
  };
}, []);


  useEffect(() => {
    const handleFullscreenChange = () => {
      // Reset dimensions of the ImageGallery component
      const gallery = document.querySelector('.image-gallery-content');
      if (gallery) {
        gallery.style.width = '100%';
        gallery.style.height = '100%';
      }
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);

    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);

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
