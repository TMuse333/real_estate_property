import React, { useState } from 'react';
import { useEffect } from 'react';
import { useImageContext } from '../../context/imageContext';
import ImageUploader from '../imageUploader/imageUploader';
import Property from '../property/property';
import './createPage.css';

const CreateText = ({ onSave }) => {

  const [dataSubmitted, setDataSubmitted] = useState(false)


  


  const [propertyPrice, setPropertyPrice] = useState(null);
  const [propertyOpeningDate, setPropertyOpeningDate] = useState(null);
  const [propertyClosingDate, setPropertyClosingDate] = useState(null);
  const [propertyMainDescription, setPropertyMainDescription] = useState(null);
  const [propertyDescription2, setPropertyDescription2] = useState(null);
  const [propertyDescription3, setPropertyDescription3] = useState(null);
  const [propertyVideo, setPropertyVideo] = useState(null);
  const [featureAttributes, setFeatureAttributes] = useState(null);
  const [sliderImages, setSliderImages] = useState(null);
  const [sliderImages2, setSliderImages2] = useState(null);
  const [documents, setDocuments] = useState(null);
  const [factsList, setFactsList] = useState(null);
  const [profile, setProfile] = useState(null);

  const {propertyHerobanner, setPropertyHerobanner} = useImageContext()



  const handleInputChange = (event) => {

    setPropertyPrice(event.target.value)
  }

  const [currentIndex, setCurrentIndex] = useState(0);

  const featureInputs = [
    { name: 'Property Herobanner', key: 'property-herobanner',
     image:true, setterFunction: setPropertyHerobanner },
    { name: 'Property Price', key: 'property-price' },
    { name: 'Property Opening Date', key: 'property-openingDate' },
    { name: 'Property Closing Date', key: 'property-closingDate' },
    { name: 'Property Main Description', key: 'property-mainDescription' },
    { name: 'Property Description 2', key: 'property-description2' },
    { name: 'Property Description 3', key: 'property-description3' },
    { name: 'Property Video', key: 'propertyVideo' },
    { name: 'Feature Attributes', key: 'feature-attributes' },
    { name: 'Slider Images', key: 'slider-images' },
    { name: 'Slider Images2', key: 'slider-images2' },
    { name: 'Documents', key: 'documents' },
    { name: 'Facts list', key: 'facts-list' },
    { name: 'Profile', key: 'profile' }
   
  ];

  const propertyState = {
    propertyHerobanner,
    propertyPrice,
    propertyOpeningDate,
    propertyClosingDate,
    propertyMainDescription,
    propertyDescription2,
    propertyDescription3,
    propertyVideo,
    featureAttributes,
    sliderImages,
    sliderImages2,
    documents,
    factsList,
    profile
  };

  // const handleChange = (e, featureKey) => {
  //   const { name, value } = e.target;
  //   if(featureKey){
  //     console.log('this is the feature key',featureKey)
  //     console.log('the value is',e.target.value)
  //   }
  // };

  const handleChange = (e, key) => {
    switch (key) {
      case 'property-herobanner':
        setPropertyHerobanner(e.target.value);
        break;
      case 'property-price':
        setPropertyPrice(e.target.value);
        break;
      case 'property-openingDate':
        setPropertyOpeningDate(e.target.value);
        break;
      case 'property-closingDate':
        setPropertyClosingDate(e.target.value);
        break;
      case 'property-mainDescription':
        setPropertyMainDescription(e.target.value);
        break;
      case 'property-description2':
        setPropertyDescription2(e.target.value);
        break;
      case 'property-description3':
        setPropertyDescription3(e.target.value);
        break;
      case 'propertyVideo':
        setPropertyVideo(e.target.value);
        break;
      case 'feature-attributes':
        setFeatureAttributes(e.target.value);
        break;
      case 'slider-images':
        setSliderImages(e.target.value);
        break;
      case 'slider-images2':
        setSliderImages2(e.target.value);
        break;
      case 'documents':
        setDocuments(e.target.value);
        break;
      case 'facts-list':
        setFactsList(e.target.value);
        break;
      case 'profile':
        setProfile(e.target.value);
        break;
      default:
        break;
    }
  };
  

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === featureInputs.length - 1 ? 0 : prevIndex + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? featureInputs.length - 1 : prevIndex - 1));
  };

  const handleSave = () => {
    // Update propertyData with the extracted values
   
  
   
  
    setDataSubmitted(true);
  
    console.log('property data', propertyData);
  };
  
 
  
  
useEffect
  





  return (
    <>
    <div className='create-page-container'>
      <h2>Create Property Text</h2>
      <div className='inputs'>
        {featureInputs.map((feature, index) => (
          <div key={index} style={{ display: index === currentIndex ? 'block' : 'none' }}>
            {feature.image ? (
              <ImageUploader inputName={feature.name}
              setterFunction={feature.setterFunction} />
            ) : (
              <div className='input-labels'>
                <label htmlFor={feature.key}>{feature.name}:</label>
                <input
                  type="text"
                  id={feature.key}
                  name={feature.key}
                
                  onChange={(e) => handleChange(e, feature.key)} 
                  className='text-input'
                  // placeholder='enter text here'
                />
              </div>
            )}
             {/* <button onClick={() => handleSaveIndividual(feature.key)}>Save {feature.name}</button> */}

          </div>
          
        ))}
      </div>
      <div>

      {/* <label htmlFor="propertyPrice">Property Price:</label>
      <input
        type="number"
        id="propertyPrice"
        value={propertyPrice}
        onChange={handleInputChange}
      /> */}
        <button onClick={handlePrev}>Previous</button>
        <button onClick={handleNext}>Next</button>
      </div>
    
      <button onClick={handleSave}>Create page</button>
    </div>

{dataSubmitted && (
  <Property
  {...propertyState}
  />
)}

    </>
  );
};

export default CreateText;
