import React, { useState, useEffect } from 'react';
import { useImageContext } from '../../context/imageContext';
import './imageUploader.css';

const ImageUploader = ({ onSingleImageUpload, onMultipleImagesUpload, multiple,
inputName, setterFunction }) => {



  const [droppedImages, setDroppedImages] = useState([]);

  // Prevent default behavior for dragover and drop events
  const handleDragOver = (event) => {
    event.preventDefault();
  };

  // Handle the dropped image files
  const handleDrop = (event) => {
    event.preventDefault();

    // Access the dropped files from the event
    const files = event.dataTransfer.files;

    // Convert FileList to array
    const fileList = Array.from(files);

    // Read dropped image files as URLs
    const readerPromises = fileList.map((file) => {
      return new Promise((resolve) => {
        const reader = new FileReader();
        reader.onload = () => {
          resolve(reader.result); // Resolve with the data URL
        };
        reader.readAsDataURL(file);
      });
    });

    // Set dropped images state with the resolved data URLs
    Promise.all(readerPromises).then((imageURLs) => {
      setDroppedImages((prevImages) => [...prevImages, ...imageURLs]);
    });

    if (multiple && setterFunction ) {
      // setterFunction((prevImages) => [...prevImages, ...fileList]); 
      // Append the dropped files to the array
    } else if (!multiple && setterFunction && fileList.length > 0) {
      // If multiple is false and setterFunction is provided, update with the first file
      setterFunction(fileList[0]); 
    }
  ;

 

    // Invoke the appropriate upload function based on the multiple prop
    if (multiple && onMultipleImagesUpload) {
      onMultipleImagesUpload(fileList);
    } else if (!multiple && onSingleImageUpload && fileList.length > 0) { // Only upload if files exist
      onSingleImageUpload(fileList[0]); // Upload only the first file
    }
  };

  useEffect(()=>{
    setterFunction(droppedImages[0])
  },[droppedImages])

  return (
    <div
      className="image-uploader"
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >

{multiple ? (
  droppedImages.map((imageURL, index) => (
    <div key={index} className="image-preview">
      <img src={imageURL} alt={`Dropped ${index + 1}`} />
    </div>
  ))
) : (
  droppedImages.length > 0 && (
    <div className="image-preview">
      <img src={droppedImages[droppedImages.length - 1]} alt="Single dropped image" />
    </div>
  )
)}
  

    
      <p>Drag and drop images here or click to upload {inputName}</p>
      <input
        type="file"
        accept="image/*"
        multiple={multiple}
        onChange={(e) => {
          const files = e.target.files;
          const fileList = Array.from(files);
          const readerPromises = fileList.map((file) => {
            return new Promise((resolve) => {
              const reader = new FileReader();
              reader.onload = () => {
                resolve(reader.result); // Resolve with the data URL
              };
              reader.readAsDataURL(file);
            });
          });
          // Set dropped images state with the resolved data URLs
          Promise.all(readerPromises).then((imageURLs) => {
            setDroppedImages((prevImages) => [...prevImages, ...imageURLs]);
          });

          // Invoke the appropriate upload function based on the multiple prop
          if (multiple && onMultipleImagesUpload) {
            onMultipleImagesUpload(fileList);
          } else if (!multiple && onSingleImageUpload && fileList.length > 0) { // Only upload if files exist
            onSingleImageUpload(fileList[0]); // Upload only the first file
          }
        }}
      />
    </div>
  );
};

export default ImageUploader;
