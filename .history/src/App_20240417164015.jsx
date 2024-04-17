import React, { useState ,useEffect} from 'react';
import { Routes, Route } from 'react-router-dom';

import Homepage from './components/homepage/homepage';
import Property from './components/property/property';
import NewPage from './components/newPage/newPage';
import CreatePage from './components/createPage/createPage';
import { ImageProvider } from './context/imageContext';
import { AppProvider } from './context/context';
import Features from './components/features/features';


function App() {








  // Function to add a new route to the code2 state


  return (
    
<AppProvider>



     
      <Routes>
        <Route path="/" element={<Property />} />
        {/* <Route path="/property" element={<Property />} /> */}
        <Route path='create-page'
        element={<CreatePage/>}>

        </Route>
       
       <Route path='create-property'
       element={<Property
       inputVariant={true}/>}>

       </Route>

       <Route path='input-variant'
       element={<Features
      inputVariant={true}
      />}
      >
        
      </Route>
       
      </Routes>
      </AppProvider>
 
  );
}

export default App;
