import React from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import {Route}
import Homepage from './components/homepage/homepage';
import Property from './components/property/property';


function App() {
  return (
    <Router>
      <RouteProvider> {/* Wrap the Routes inside RouteProvider */}
        <div>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/property" element={<Property />} />
            {/* NewPage route will be added dynamically */}
          </Routes>
        </div>
      </RouteProvider>
    </Router>
  );
}

export default App;
