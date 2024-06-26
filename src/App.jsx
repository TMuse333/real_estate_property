import React, { useState ,useEffect} from 'react';
import { Routes, Route } from 'react-router-dom';

import Homepage from './components/homepage/homepage';
import Property from './components/property/property';
import NewPage from './components/newPage/newPage';

import { ImageProvider } from './context/imageContext';
import { AppProvider } from './context/context';
import Features from './components/features/features';
import Documents from './components/documents/documents';
import CreateProperty from './components/createProperty/createProperty';

function App() {








  // Function to add a new route to the code2 state


  return (
    
<AppProvider>



     
      <Routes>
        <Route path="/" element={<Property
        inputVariant={true} />} />
        {/* <Route path="/property" element={<Property />} /> */}
     
       <Route path='create-property'
       element={<CreateProperty
       />}>

       </Route>

       <Route path='input-variant'
       element={<Documents
      inputVariant={true}
      />}
      >
        
      </Route>
       
      </Routes>
      </AppProvider>
 
  );
}

export default App;
