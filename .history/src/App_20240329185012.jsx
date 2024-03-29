import React, { useState ,useEffect} from 'react';
import { Routes, Route } from 'react-router-dom';
import { RouteProvider, useRouteContext } from './context/context';
import Homepage from './components/homepage/homepage';
import Property from './components/property/property';
import NewPage from './components/newPage/newPage';
import CreatePage from './components/createPage/createPage';


function App() {


  const{routes} = useRouteContext()





  useEffect(()=>{
    console.log('effect routes',routes)

  },[routes,])





  // Function to add a new route to the code2 state


  return (
    <RouteProvider> 
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/property" element={<Property />} />
        <Route path='create-page'
        element={<CreatePage/>}>

        </Route>
        {/* Render routes from code2 state */}
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
    </RouteProvider>
  );
}

export default App;
