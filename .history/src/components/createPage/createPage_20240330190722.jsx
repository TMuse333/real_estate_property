import React, { useState } from 'react';
import ImageUploader from '../imageUploader/imageUploader';
import './createPage.css'

const CreateText = ({ onSave }) => {
  const [propertyData, setPropertyData] = useState({
    propertyHerobanner: '',
    propertyPrice: '',
    propertyOpeningDate: '',
    propertyClosingDate: '',
    propertyMainDescription: '',
    propertyDescription2: '',
    propertyDescription3: '',
    propertyVideo: '',
    featureAttributes:'', 
    sliderImages:'',
    carouselImages1: '',
    carouselImages2: '',
    documents: '',
    factsList: '',
    profile: ''
    // Add more properties as needed
  });

  const featureInputs = [
    { name: 'Property Herobanner', key: 'property-herobanner', image:true },
    { name: 'Property Price', key: 'property-price' },
    { name: 'Property Opening Date', key: 'property-openingDate' },
    { name: 'Property Closing Date', key: 'property-closingDate' },
    { name: 'Property Main Description', key: 'property-mainDescription' },
    { name: 'Property Description 2', key: 'property-description2' },
    { name: 'Property Description 3', key: 'property-description3' },
    { name: 'Property Video', key: 'propertyVideo' },
    {name: 'Feature Attributes', key:'feature-attributes'},
    {name:'Slider Images', key:'slider-images'},
    {name:'Slider Images2', key:'slider-images2'},
    {name:'Documents', key:'documents'},
    {name:'Facts list', key:'facts-list'},
    {name:'Profile', key:'profile'}


    // Add more features as needed
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPropertyData({ ...propertyData, [name]: value });
  };

  const handleSave = () => {
    onSave(propertyData);
    // Optionally, you can reset the input fields after saving
    setPropertyData({
      propertyHerobanner: '',
      propertyPrice: '',
      propertyOpeningDate: '',
      propertyClosingDate: '',
      propertyMainDescription: '',
      propertyDescription2: '',
      propertyDescription3: '',
      propertyVideo: '',
      featureAttributes:'', 
      sliderImages:'',
      carouselImages1: '',
      carouselImages2: '',
      documents: '',
      factsList: '',
      profile: ''
      // Add more properties as needed
    });
  };

  return (
    <div className='create-page-container'>
      <h2>Create Property Text</h2>
      {featureInputs.map((feature) => (

        {}

        <div className='input-labels'
        key={feature.key}>
          <label htmlFor={feature.key}>{feature.name}:</label>
          <input
            type="text"
            id={feature.key}
            name={feature.key}
            value={propertyData[feature.key]}
            onChange={handleChange}
            className='text-input'
          />
        </div>
      ))}
      <button onClick={handleSave}>Save</button>
      <ImageUploader
      multiple={true}/>
    </div>
  );
};

export default CreateText;
