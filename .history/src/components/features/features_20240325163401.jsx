import React from "react";
import img from '../../media/place-holder.jpg'

const Features = ({ name, price, address, featuresName, featureImage, amenities }) => {
    // Combine featuresName and featureImage arrays to create an array of objects

    if(featureName){
        
    }
    const featuresList = featuresName.map((name, index) => ({
      name: name,
      image: featureImage[index]
    }));
  
    return (
      <section className="amenities-container">
        <h1>{name || 'property name'}</h1>
        <h3>{address || 'address name'}</h3>
        <h2><strong>For sale:</strong> {price || '1,000, 000'}</h2>
  
        <div className="amenities-grid">
          {featuresList.map((feature, index) => (
            <div className="amenity" key={index}>
              <img src={feature.image || img} alt={feature.name || 'feature'} />
              <p>{feature.name || 'feature'}</p>
            </div>
          ))}
        </div>
  
        <div className="amenities-box">
          <h2>Amenities</h2>
          {amenities.map((amenity, index) => (
            <div className="amenity" key={index}>
              <img src={img} style={{ height: '30px' }} alt="amenity" />
              <p>{amenity || 'amenity name'}</p>
            </div>
          ))}
        </div>
      </section>
    )
  }
  
  export default Features;
  


