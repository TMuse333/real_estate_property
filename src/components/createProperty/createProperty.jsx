import React, {useState, useEffect} from "react";
import './createProperty.css'
import PropertyControls from "../propertyControls/propertyControls";

const CreateProperty = () => {



    return (
        <div className="create-property-container">

           <PropertyControls/>

        </div>
    )
}

export default CreateProperty