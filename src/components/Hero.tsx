import { Box, Stack } from '@mui/material'
import React from 'react'

const Hero = () => {
  return (
    <Stack direction="row" justifyContent="center" sx={{ marginLeft: "10%", marginRight: "10%" }}>
        <Box flex={5} bgcolor="red" padding={2}>CTA</Box>
        <Box flex={5} bgcolor="#F1EFF1" padding={2} sx={{ display: { xs: "none", sm: "none", md: "flex"}, minHeight: "90vh" }}>
          <img src="Images/Black_on_Transparent.png" alt="" style={{ maxWidth: "100%", margin: "auto auto" }}/>
        </Box>
    </Stack>
  )
}

export default Hero