import React, { useState } from 'react';
import { useEffect } from 'react';
import ImageUploader from '../imageUploader/imageUploader';
import Property from '../property/property';
import './createPage.css';

const CreateText = ({ onSave }) => {

  const [dataSubmitted, setDataSubmitted] = useState(false)


  const [propertyData, setPropertyData] = useState({
    propertyHerobanner: '',
    propertyPrice: '',
    propertyOpeningDate: '',
    propertyClosingDate: '',
    propertyMainDescription: '',
    propertyDescription2: '',
    propertyDescription3: '',
    propertyVideo: '',
    featureAttributes: '', 
    sliderImages: '',
    carouselImages1: '',
    carouselImages2: '',
    documents: '',
    factsList: '',
    profile: ''
    
  });

  const [propertyHerobanner, setPropertyHerobanner] = useState(null);
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

  const handleInputChange = (event) => {

    setPropertyPrice(event.target.value)
  }

  const [currentIndex, setCurrentIndex] = useState(0);

  const featureInputs = [
    { name: 'Property Herobanner', key: 'property-herobanner', image:true },
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
      // Add cases for other features
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
    setPropertyData((prevData) => {
      const updatedData = { ...prevData };
  
      // Loop through each featureInput and update propertyData accordingly
      featureInputs.forEach((feature) => {
        updatedData[feature.key] = propertyData[feature.key] || '';
      });
  
      return updatedData;
    });
  
    // Optionally, you can reset the input fields after saving
    // setPropertyData({
    //   propertyHerobanner: '',
    //   propertyPrice: '',
    //   propertyOpeningDate: '',
    //   propertyClosingDate: '',
    //   propertyMainDescription: '',
    //   propertyDescription2: '',
    //   propertyDescription3: '',
    //   propertyVideo: '',
    //   featureAttributes: '', 
    //   sliderImages: '',
    //   carouselImages1: '',
    //   carouselImages2: '',
    //   documents: '',
    //   factsList: '',
    //   profile: ''
    // });
  
    setDataSubmitted(true);
  
    console.log('property data', propertyData);
  };
  
  const handleSaveIndividual = (key) => {
    // Update propertyData with the extracted value for the specified key
    setPropertyData((prevData) => {
      const updatedData = {
        ...prevData,
        [key]: document.getElementById(key).value,
      };
      console.log('data updated', updatedData); // Log the updated data here
      return updatedData;
    });
  };
  
  

  
  useEffect(()=> {
    console.log('data updated',propertyData)
  },[propertyData])




  return (
    <>
    <div className='create-page-container'>
      <h2>Create Property Text</h2>
      <div className='inputs'>
        {featureInputs.map((feature, index) => (
          <div key={index} style={{ display: index === currentIndex ? 'block' : 'none' }}>
            {feature.image ? (
              <ImageUploader inputName={feature.name} />
            ) : (
              <div className='input-labels'>
                <label htmlFor={feature.key}>{feature.name}:</label>
                <input
                  type="text"
                  id={feature.key}
                  name={feature.key}
                  value={propertyData[feature.key] || ''}
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
  propertyPrice={propertyPrice}/>
)}

    </>
  );
};

export default CreateText;
