import React from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import { RouteProvider } from './context/context';
import Homepage from './components/homepage/homepage';
import Property from './components/property/property';


function App() {
  return (
    <Routes>
      {/* <RouteProvider>  */}

         
            <Route path="/" element={<Homepage />} />
            <Route path="/property" element={<Property />} />
          
        
       
      </RouteProvider>
    </Routes>
  );
}

export default App;
