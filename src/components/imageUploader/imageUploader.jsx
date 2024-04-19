import React, { useState, useEffect } from 'react';
import { useImageContext } from '../../context/imageContext';
import './imageUploader.css';
import placeholder from '../../media/place-holder.jpg'
import { useContext } from 'react';
import kakashi from '../../media/kakashi_susanoo.jpg'
import { useFeatureContext } from '../../context/featureContext';
import { useProfileContext } from '../../context/profileContext';
import { useDocumentContext } from '../../context/documentContext';

const ImageUploader = ({ multiple, inputName, setterFunction, isProfileImage,
isFeatureImage ,isDocumentImage, 
arrayIndex, className
}) => {

  //to make the code simpler i will have to add a general prop
  //for the styling of the input box, which will be the styling of the
  //specified object that i am putting input for

  // const {droppedImages, setDroppedImages} = useImageContext()

  const [droppedImages, setDroppedImages] = useState([])

  const {profileImage, setProfileImage} = useProfileContext()

 const {handleAddFeatureImage,featureList} = useFeatureContext()

 const {handleDocumentChange,documentList} = useDocumentContext()




  
  // Prevent default behavior for dragover and drop events
  const handleDragOver = (event) => {
    event.preventDefault();
  };

  // Handle the dropped image files
  const handleDrop = (event) => {
    event.preventDefault();

        if(isFeatureImage && !featureList[arrayIndex] ){
          window.alert('Please name your feature before placing the image')
          return
        }

        else if(!multiple && droppedImages.length === 1){
          return
        }

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

 
  const [firstImageDropped, setFirstImageDropped] = useState(false);
 

  useEffect(() => {

    if(isProfileImage && droppedImages.length > 0){
      setProfileImage(droppedImages[0])
      // console.log('the profile src is',profileImage)
    }


   else if (isFeatureImage && droppedImages.length >0 &&featureList[arrayIndex]) {
      handleAddFeatureImage(arrayIndex,droppedImages[droppedImages.length-1]); // Call addFeatureImage function when isFeatureImage is true
      console.log('adding le feature');
      
    }

    else if (isDocumentImage && droppedImages.length >0 && documentList[arrayIndex]){
      handleDocumentChange(arrayIndex,'image',droppedImages[droppedImages.length-1])
    }

    else if(setterFunction && !firstImageDropped){
      setterFunction(droppedImages[0])
      setFirstImageDropped(true)
    }
  }, [droppedImages]); 
  



  const uploaderClassName = isProfileImage ? "profile-image-uploader" : !isFeatureImage  ? "image-uploader" : 
  'image-uploader no-padding';

  const style = {
    backgroundColor: droppedImages.length === 0 ? '#00bfff' : 'transparent'
  }

  // console.log('the profile image is...',profileImage)

  return (
    <>
      <div className={className || 'image-uploader'} onDragOver={handleDragOver} onDrop={handleDrop} style={style}>
        {droppedImages.length > 0 ? (
          // Render the first dropped image if multiple is not true
          !multiple ? (
          
              <img src={droppedImages[0]} alt="Single dropped image" />
    
          ) : (
            // Render all dropped images if multiple is true
            <>
              {droppedImages.map((imageURL, index) => (
                <div key={index} className="image-preview">
                  <img src={imageURL} alt={`Dropped ${index + 1}`} />
                </div>
              ))}
            </>
          )
        ) : (
          // Render the file input if no image is uploaded
          <>
            <p>Drag and drop images here or click to upload {inputName}</p>
            <input type="file" accept="image/*" multiple={multiple} onChange={handleFileInputChange} />
          </>
        )}
      </div>
    </>
  );
  
  

        }
  
export default ImageUploader;
