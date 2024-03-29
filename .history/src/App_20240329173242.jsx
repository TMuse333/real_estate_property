import React from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import { RouteProvider, useRouteContext } from './context/context';
import Homepage from './components/homepage/homepage';
import Property from './components/property/property';


function App() {

  const routeContext = useRouteContext(); // Get the entire route context object
  const routes = routeContext ? routeContext.routes : []; // Check if routeContext exists

  return (
    <RouteProvider> 
    <Routes>


         
            <Route path="/" element={<Homepage />} />
            <Route path="/property" element={<Property />} />

            {routes.map((route,index) => (
              <Route path={route.path}
              element={route.element}
              />
            ))}
          
        
       
     
    </Routes>
    </RouteProvider>
  );
}

export default App;
