import React from 'react';

const ImageUploader = ({ onImageUpload }) => {
  // Prevent default behavior for dragover and drop events
  const handleDragOver = (event) => {
    event.preventDefault();
  };

  // Handle the dropped image files
  const handleDrop = (event) => {
    event.preventDefault();

    // Access the dropped files from the event
    const files = event.dataTransfer.files;

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
      <p>Drag and drop images here or click to upload</p>
      <input
        type="file"
        accept="image/*"
       onDragOver={handleDragOver}
      />
    </div>
  );
};

export default ImageUploader;
