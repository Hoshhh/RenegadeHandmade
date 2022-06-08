import { Box, Stack } from '@mui/material'
import React from 'react'

const Hero = () => {
  return (
    <Stack direction="row" justifyContent="center" sx={{ marginLeft: "10%", marginRight: "10%"}}>
        <Box flex={5} bgcolor="red" padding={2}>CTA</Box>
        <Box 
            flex={5} 
            bgcolor="blue" 
            padding={2} 
            sx={{ display: { xs: "none", sm: "block"} }}>
        Image</Box>
    </Stack>
  )
}

export default Hero