import React, { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import NewPage from '../components/newPage/newPage';
// Create a context for managing routes



import React, { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

const RouteContext = createContext();

export const RouteProvider = ({ children }) => {
  const [routes, setRoutes] = useState([
    { path: '/new-page', element: <NewPage /> }
  ]);

  return (
    <RouteContext.Provider value={{ routes, setRoutes }}>
      {children}
    </RouteContext.Provider>
  );
};

RouteProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useRouteContext = () => {
  const context = useContext(RouteContext);
  if (!context) {
    throw new Error('useRouteContext must be used within a RouteProvider');
  }
  return context;
};
