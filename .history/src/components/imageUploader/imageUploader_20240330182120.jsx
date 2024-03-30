import React, { useState } from 'react';

const ImageUploader = ({ onImageUpload }) => {
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    if (selectedImage) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(selectedImage);
      onImageUpload(selectedImage); // Pass the selected image to the parent component
    }
  };

  return (
    <div>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        style={{ display: 'none' }}
        id="imageInput"
      />
      <label htmlFor="imageInput">Drag & Drop or Click to Upload Image</label>
      {image && <img src={image} alt="Uploaded" />}
    </div>
  );
};

export default ImageUploader;
