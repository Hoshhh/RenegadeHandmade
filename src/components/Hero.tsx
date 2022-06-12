import { Box, Button, Stack, styled, Typography } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'

const Buttons = styled(Button)({
  marginLeft: "10px",
  backgroundColor: "black",
  marginTop: "10px"
})

const Hero = () => {
  return (
    <Stack direction="row" justifyContent="center" sx={{ marginLeft: "10%", marginRight: "10%" }}>
        <Box flex={5} bgcolor="#F1EFF1" padding={2} sx={{ display: "flex", textAlign: "center", minHeight: "90vh", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
          <Typography variant='h1' sx={{ fontSize: { xs: "4rem", sm: "4rem", md: "3rem", lg: "4rem", xl: "4.5rem"} }}>One-of-a-kind, Handmade Furniture</Typography>
          <Container sx={{ display: "block" }}>
            <Buttons variant='contained'>Browse</Buttons>
            <Buttons variant='contained'>Custom Work</Buttons>
          </Container>
        </Box>
        <Box flex={5} bgcolor="#F1EFF1" padding={2} sx={{ display: { xs: "none", sm: "none", md: "flex"}, minHeight: "90vh" }}>
          <img src="Images/Black_on_Transparent.png" alt="" style={{ maxWidth: "100%", margin: "auto auto" }}/>
        </Box>
    </Stack>
  )
}

export default Hero