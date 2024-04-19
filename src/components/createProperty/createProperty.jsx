import React, {useState, useEffect} from "react";
import './createProperty.css'
import PropertyControls from "../propertyControls/propertyControls";
import { useAppContext } from "../../context/context";
import Section from "../section/section";
import Navbar from "../navbar/navbar";

const CreateProperty = () => {

    const {sectionListLength} = useAppContext()

    function renderSections(){
        return Array.from({length:sectionListLength},(_,index) => (
            <Section
            key={index}/>
        ))
    }


    return (
        <div className="create-property-container">

            <Navbar/>
            <PropertyControls/>

            <div className="property-sections-container">
            {renderSections()}
            </div>

         

           

        </div>
    )
}

export default CreateProperty