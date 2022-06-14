import { Box } from '@mui/material';
import React from 'react';
import './App.css';
import FeaturedProducts from './components/FeaturedProducts';
import Hero from './components/Hero';
import Navbar from './components/Navbar';

function App() {
  return (
    <Box className='App'>
      <Navbar />
      <Hero/>
      <FeaturedProducts />
    </Box>
  );
}

export default App;
