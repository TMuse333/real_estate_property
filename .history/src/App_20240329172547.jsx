import React from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import { RouteProvider, useRouteContext } from './context/context';
import Homepage from './components/homepage/homepage';
import Property from './components/property/property';


function App() {

  const {Routes} = useRouteContext()

  return (
    <RouteProvider> 
    <Routes>


         
            <Route path="/" element={<Homepage />} />
            <Route path="/property" element={<Property />} />

            {/* {Routes.map((route,index) => (
              <Route path={route.}
            ))} */}
          
        
       
     
    </Routes>
    </RouteProvider>
  );
}

export default App;
