import React, { useState } from 'react';
import './imageUploader.css';

const ImageUploader = ({ onSingleImageUpload, onMultipleImagesUpload, multiple }) => {
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

    // Invoke the appropriate upload function based on the multiple prop
    if (multiple && onMultipleImagesUpload) {
      onMultipleImagesUpload(fileList);
    } else if (!multiple && onSingleImageUpload && fileList.length > 0) { // Only upload if files exist
      onSingleImageUpload(fileList[0]); // Upload only the first file
    }
  };

  return (
    <div
      className="image-uploader"
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >

        {multiple ? (

{droppedImages.map((imageURL, index) => (
    <div key={index} className="image-preview">
      <img src={imageURL} alt={`Dropped ${index + 1}`} />
    </div>
  ))}
        ) : (
            <img src={droppedImages[0]
            }
        )}
  

    
      <p>Drag and drop images here or click to upload</p>
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
