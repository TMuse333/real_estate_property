import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { RouteProvider, useRouteContext } from './context/context';
import Homepage from './components/homepage/homepage';
import Property from './components/property/property';
import NewPage from './components/newPage/newPage';

function App() {
  const { routes, addNewRoute } = useRouteContext(); // Destructure routes and addNewRoute from routeContext

  // Function to add a new route
  const handleAddNewRoute = () => {
    const newRoute = {
      path: '/new-page',
      element: <NewPage />
    };
    addNewRoute(newRoute); // Call addNewRoute function from routeContext to add the new route
  };

  return (
    <RouteProvider>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/property" element={<Property />} />
        {/* Render routes from the routeContext */}
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
      <button onClick={handleAddNewRoute}>Add New Route</button> {/* Button to add a new route */}
    </RouteProvider>
  );
}

export default App;
