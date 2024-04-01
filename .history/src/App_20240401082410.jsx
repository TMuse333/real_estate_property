import React, { useState ,useEffect} from 'react';
import { Routes, Route } from 'react-router-dom';

import Homepage from './components/homepage/homepage';
import Property from './components/property/property';
import NewPage from './components/newPage/newPage';
import CreatePage from './components/createPage/createPage';


function App() {








  // Function to add a new route to the code2 state


  return (
    
     
      <Routes>
        <Route path="/" element={<Property />} />
        <Route path="/property" element={<Property />} />
        <Route path='create-page'
        element={<CreatePage/>}>

        </Route>
        {/* Render routes from code2 state */}
       
      </Routes>
 
  );
}

export default App;
