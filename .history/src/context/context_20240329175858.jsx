import React, { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import NewPage from '../components/newPage/newPage';
// Create a context for managing routes
const PageContext = createContext()