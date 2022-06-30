import { Box } from '@mui/material'
import React from 'react'
import FeaturedProducts from '../components/FeaturedProducts'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'

const HomePage = () => {
  return (
    <Box className='App'>
        <Hero />
        <FeaturedProducts />
    </Box>
  )
}

export default HomePage