import { Box } from '@mui/material';
import React from 'react';
import './App.css';
import Hero from './components/Hero';
import Navbar from './components/Navbar';

function App() {
  return (
    <Box className='App'>
      <Navbar />
      <Hero/>
    </Box>
  );
}

export default App;
