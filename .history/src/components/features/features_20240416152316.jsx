import React from "react";
import img from '../../media/place-holder.jpg';
import './features.css'
import {FaCheck} from 'react-icons/fa'
const Features = ({ name, price, address, featuresName, featureImage, amenities,inputVariant }) => {
    // Initialize featuresList
    let featuresList = [];

    // Check if featuresName is not null
    if(featuresName){
        featuresList = featuresName.map((name, index) => ({
            name: name,
            image: featureImage[index]
          }));
    } else {
        // If featuresName is null, create 10 random features with placeholder text and images
        for (let i = 0; i < 10; i++) {
            featuresList.push({
                name: `Feature ${i+1}`,
                image: img // Use placeholder image
            });
        }
    }

    // Initialize amenitiesList
    let amenitiesList = [];

    // Check if amenities is not null
    if(amenities){
        amenitiesList = amenities.map((amenity, index) => ({
            name: amenity,
            image: img // Use placeholder image for amenities
          }));
    } else {
        // If amenities is null, create 10 random amenities with placeholder text and images
        for (let i = 0; i < 10; i++) {
            amenitiesList.push({
                name: `Amenity ${i+1}`,
                image: img // Use placeholder image
            });
        }
    }

    return (
      <>

      <section className="amenities-container"
      id='price-and-features'>
        <h1>{name || 'property name'}</h1>
        <h3>{address || 'address name'}</h3>
        <h2><strong>For sale:</strong> {price || '1,000, 000'}</h2>
  
        <div className="features-grid">
          {featuresList.map((feature, index) => (
            <div className="feature" key={index}>
              <img src={feature.image || img} alt={feature.name || 'feature'} />
              <p>{feature.name || 'feature'}</p>
            </div>
          ))}
        </div>

        <h2>Amenities</h2>
  
        <div className="amenities-box"
        id='amenities'>
         
          {amenitiesList.map((amenity, index) => (
            <div className="amenity" key={index}>
             
              <p>{amenity.name || 'amenity name'}</p>
              &nbsp; &nbsp;<FaCheck/>
            </div>
          ))}
        </div>
      </section>
      </>
    )
}

export default Features;
