import { Email, Facebook, Phone } from '@mui/icons-material'
import { Button, IconButton, Paper, Typography } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import { Link } from 'react-router-dom'

const ContactPage = () => {
  return (
    <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: "90vh"}}>
        <Paper sx={{ width: {xs: '90%', sm: '75%', md: '50%'}, height: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center'}} elevation={3}>
            <div>
                <div style={{ display: 'flex', width: '100%', justifyContent: 'center' }}>
                    <Typography variant='h3' sx={{ fontSize: {xs: '2.5rem', sm: '3rem'} }}>Contact</Typography>
                </div>
                <div style={{ margin: '20px', display: 'flex', alignItems: 'center' }}>
                    <Phone fontSize='large' sx={{ color: '#16a085', fontSize: {xs: '2rem', sm: '2.1875rem'} }} />
                    <Typography variant='h6' sx={{ marginLeft: '10px', fontSize: {xs: '1.1rem', sm: '1.25rem'} }}>(606) 791-8326</Typography>
                </div>
                <div style={{ margin: '20px', display: 'flex', alignItems: 'center' }}>
                    <Email fontSize='large' sx={{ color: '#16a085', fontSize: {xs: '2rem', sm: '2.1875rem'} }} />
                    <Typography variant='h6' sx={{ marginLeft: '10px', fontSize: {xs: '1.1rem', sm: '1.25rem'} }}>renegadehm@gmail.com</Typography>
                </div>
                <div style={{ margin: '20px', display: 'flex', alignItems: 'center' }}>
                    <IconButton sx={{margin: '0px', padding: '0px'}} href='https://www.facebook.com/RenhandmadeCompany/' target="_blank" >
                        <Facebook fontSize='large' sx={{ color: '#16a085', '&:hover': {color: "#1abc9c"}, fontSize: {xs: '2rem', sm: '2.1875rem'} }} />
                    </IconButton>
                    <Typography component='a' href='https://www.facebook.com/RenhandmadeCompany/' target="_blank" variant='h6' sx={{ marginLeft: '10px', color: 'black', '&:hover': {color: "#1abc9c"}, textDecoration: "none", fontSize: {xs: '1.1rem', sm: '1.25rem'} }}>@RenhandmadeCompany</Typography>
                </div>
                <div style={{ display: 'flex', width: '100%', justifyContent: 'center', marginTop: '40px' }}>
                    <Link to="/" style={{ textDecoration: "none" }}>
                        <Button variant='contained' sx={{ backgroundColor: "#16a085", '&:hover': {backgroundColor: "#1abc9c"} }}>Home</Button>
                    </Link>
                </div>
            </div>
        </Paper>
    </Container>
  )
}

export default ContactPage