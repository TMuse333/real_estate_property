import React, { createContext, useContext, useState } from 'react';
import Pr
// Create a context for managing routes
const RouteContext = createContext();

// Custom hook to access the route context
export const useRouteContext = () => useContext(RouteContext);

// Provider component to wrap the application and provide route context
export const RouteProvider = ({ children }) => {
  const [routes, setRoutes] = useState([
   
  ]);

  const addNewRoute = (newRoute) => {
    setRoutes([...routes, newRoute]);
  };

  return (
    <RouteContext.Provider value={{ routes, addNewRoute }}>
      {children}
    </RouteContext.Provider>
  );
};
