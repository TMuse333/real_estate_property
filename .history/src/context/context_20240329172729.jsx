import React, { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes

// Create a context for managing routes
const RouteContext = createContext();

// Custom hook to access the route context
export const useRouteContext = () => useContext(RouteContext);

// Define the PropTypes for a single route object


// Provider component to wrap the application and provide route context
export const RouteProvider = ({ children }) => {
  const [routes, setRoutes] = useState([]);

  const addNewRoute = (newRoute) => {
    setRoutes([...routes, newRoute]);
  };

  return (
    <RouteContext.Provider value={{ routes, addNewRoute }}>
      {children}
    </RouteContext.Provider>
  );
};

// Define the PropTypes for the children of RouteProvider
RouteProvider.propTypes = {
  children: PropTypes.node.isRequired, // Children must be valid React nodes
};
