import React, { useState } from 'react';
import './imageUploader.css';

const ImageUploader = ({ onImageUpload }) => {
  const [droppedImageURL, setDroppedImageURL] = useState(null);

  // Prevent default behavior for dragover and drop events
  const handleDragOver = (event) => {
    event.preventDefault();
  };

  // Handle the dropped image files
  const handleDrop = (event) => {
    event.preventDefault();

    // Access the dropped files from the event
    const files = event.dataTransfer.files;

    // Get the first dropped file (assuming it's an image)
    const droppedImageFile = files[0];

    // Read the dropped image file as a URL
    const reader = new FileReader();
    reader.onload = () => {
      setDroppedImageURL(reader.result); // Store the dropped image URL
    };
    reader.readAsDataURL(droppedImageFile);

    // Invoke the onImageUpload function with the dropped files
    if (onImageUpload) {
      onImageUpload(files);
    }
  };

  return (
    <div
      className="image-uploader"
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      {droppedImageURL && (
        <div className="image-preview">
          <img src={droppedImageURL} alt="Dropped" />
        </div>
      )}
      {!droppedImageURL && <p>Drag and drop images here or click to upload</p>}
      <input
        type="file"
        accept="image/*"
        onChange={(e) => {
          if (onImageUpload) {
            onImageUpload(e.target.files);
          }
        }}
      />
    </div>
  );
};

export default ImageUploader;
