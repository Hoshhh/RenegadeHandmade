import { Box } from '@mui/material'
import React from 'react'
import FeaturedProducts from '../components/FeaturedProducts'
import Hero from '../components/Hero'

type HomeProps = {
  onAddToCart:any
}

const HomePage = (props: HomeProps) => {
  return (
    <Box className='App'>
        <Hero />
        {/* <FeaturedProducts onAddToCart={props.onAddToCart} /> */}
    </Box>
  )
}

export default HomePage