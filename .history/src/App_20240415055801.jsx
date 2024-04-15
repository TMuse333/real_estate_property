import React, { useState ,useEffect} from 'react';
import { Routes, Route } from 'react-router-dom';

import Homepage from './components/homepage/homepage';
import Property from './components/property/property';
import NewPage from './components/newPage/newPage';
import CreatePage from './components/createPage/createPage';
import { ImageProvider } from './context/imageContext';


function App() {








  // Function to add a new route to the code2 state


  return (
    
     <ImageProvider>

     
      <Routes>
        <Route path="/" element={<Property />} />
        {/* <Route path="/property" element={<Property />} /> */}
        <Route path='create-page'
        element={<CreatePage/>}>

        </Route>
       
       <Route
       
      </Routes>
      </ImageProvider>
 
  );
}

export default App;
