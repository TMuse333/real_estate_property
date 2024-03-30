import React, { useState } from 'react';

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
    { name: 'Property Herobanner', key: 'property-herobanner' },
    { name: 'Property Price', key: 'property-price' },
    { name: 'Property Opening Date', key: 'property-OpeningDate' },
    { name: 'Property Closing Date', key: 'property-ClosingDate' },
    { name: 'Property Main Description', key: 'property-MainDescription' },
    { name: 'Property Description 2', key: 'propertyDescription2' },
    { name: 'Property Description 3', key: 'propertyDescription3' },
    { name: 'Property Video', key: 'propertyVideo' },
    {name: 'Feature Attributes', key:'feature-attributes'}


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
    <div>
      <h2>Create Property Text</h2>
      {featureInputs.map((feature) => (
        <div key={feature.key}>
          <label htmlFor={feature.key}>{feature.name}:</label>
          <input
            type="text"
            id={feature.key}
            name={feature.key}
            value={propertyData[feature.key]}
            onChange={handleChange}
          />
        </div>
      ))}
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default CreateText;
