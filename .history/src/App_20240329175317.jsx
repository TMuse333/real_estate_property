import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { RouteProvider, useRouteContext } from './context/context';
import Homepage from './components/homepage/homepage';
import Property from './components/property/property';
import NewPage from './components/newPage/newPage';
import { useEffect } from 'react';

function App() {
  const routeContext = useRouteContext();
  const routes = routeContext ? routeContext.routes : [];

  // Initialize code2 state variable using useState
  const [code2, setCode2] = useState([
    {
      path:'/new-page',
      element:<NewPage/>
    }
  ]);

  useEffect(()=>{
    console.log('effect routes',routes)
  },[routes])

  console.log('code2',code2)

  console.log('routes',routes)

  // Function to add a new route to the code2 state


  return (

      <Routes>
            <RouteProvider> 
        <Route path="/" element={<Homepage />} />
        <Route path="/property" element={<Property />} />
        {/* Render routes from code2 state */}
        {code2.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
        </RouteProvider>
      </Routes>
    
  );
}

export default App;
