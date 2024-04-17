import React, { useState, useEffect } from 'react';
import { useImageContext } from '../../context/imageContext';
import './imageUploader.css';
import placeholder from '../../media/place-holder.jpg'
import { useContext } from 'react';
import kakashi from '../../media/kakashi_susanoo.jpg'
import { useFeatureContext } from '../../context/featureContext';

const ImageUploader = ({ multiple, inputName, setterFunction, isProfileImage,
isFeatureImage
,featureIndex}) => {

  const [droppedImages, setDroppedImages] = useState([]);

  const {profileImage, setProfileImage} = useImageContext()

 const {handleAddFeatureImage,featureList} = useFeatureContext()
  
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
  };

  // Function to handle onChange event of the file input
  const handleFileInputChange = (e) => {

    if(isFeatureImage ){
      console.log('feature rage')
      return
    }



    
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
  };

  useEffect(() => {

    if(isFeatureImage && !featureList[featureIndex]){
      console.log('returning')
      return
    }

    else if (multiple && droppedImages.length > 0 && setterFunction) {
      setterFunction((imageArray) => [...imageArray, droppedImages[droppedImages.length -1]]);

    } else if (!multiple && droppedImages.length > 0 && setterFunction) {
      setterFunction(droppedImages[0]);
      // console.log('slat')
      
    }
 
  }, [droppedImages]);

  useEffect(()=> {
    if(isProfileImage && droppedImages.length > 0){
      setProfileImage(droppedImages[0])
      // console.log('the profile src is',profileImage)
    }
  },[droppedImages])

  useEffect(() => {
    if (isFeatureImage && droppedImages.length >0 &&featureList[featureIndex]) {
      handleAddFeatureImage(featureIndex,droppedImages[droppedImages.length-1]); // Call addFeatureImage function when isFeatureImage is true
      console.log('adding le feature');
    }
  }, [droppedImages]); 
  



  const uploaderClassName = isProfileImage ? "profile-image-uploader" : !isFeatureImage ? "image-uploader" : 
  'image-uploader no-padding';

  const style = {
    backgroundColor: droppedImages.length === 0 ? '#00bfff' : 'transparent'
  }

  // console.log('the profile image is...',profileImage)

  return (
    <>

    {/* For multiple images  */}
      <div className={uploaderClassName} onDragOver={handleDragOver} onDrop={handleDrop}
      style={style}>
        {multiple ? (
          <>
            {droppedImages.map((imageURL, index) => (
              <div key={index} className="image-preview">
                <img src={imageURL} alt={`Dropped ${index + 1}`} />
              </div>
            ))}
          
          </>
      
          
        ) : !multiple && droppedImages.length > 0  && !isProfileImage ? (
          <>
              {/* For a single image  */}
            <div className={isFeatureImage ? `feature-image-preview` : 'image-preview'}>
              <img src={droppedImages[droppedImages.length - 1]} alt="Single dropped image" />
            </div>

            {!isFeatureImage && (

           <>
            <p>Drag and drop images here or click to upload {inputName}</p>
            <input type="file" accept="image/*" multiple={multiple} onChange={handleFileInputChange} />
            </>
            )}
          </>
        ) : isProfileImage ? (
          <>

              {/* For a profile image  */}
          <div className='import-image'>

     
           <img src={droppedImages[0] ||placeholder}
           className='image-preview'
           />
            <input type="file" accept="image/*" multiple={multiple} onChange={handleFileInputChange} />
            </div>
          </>
        ) : null}

        {!isProfileImage && (
          <>
          {!isFeatureImage && (
           
 <p>Drag and drop images here or click to upload {inputName}</p>
 )}

 {droppedImages.length === 0 && (


          
 <input type="file" accept="image/*" multiple={multiple} onChange={handleFileInputChange} />

 )}



          </>
          

        )}
         
      </div>
    </>
  );

        }
  
export default ImageUploader;
