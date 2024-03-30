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
    // Add more properties as needed
  });

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
      // Add more properties as needed
    });
  };

  return (
    <div>
      <h2>Create Property Text</h2>
      <div>
        <label htmlFor="propertyHerobanner">Property Herobanner:</label>
        <input
          type="text"
          id="propertyHerobanner"
          name="propertyHerobanner"
          value={propertyData.propertyHerobanner}
          onChange={handleChange}
        />
      </div>
      {/* Add input fields for other property data */}
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default CreateText;
