import React from 'react'
import { InputLabel, Select, MenuItem, Button, Grid, Typography } from '@mui/material'
import { useForm, FormProvider } from 'react-hook-form'
import FormInput from './FormInput'

const AddressForm = () => {
    const methods = useForm()

  return (
    <>
        <Typography variant="h6" gutterBottom>Shipping Address</Typography>
        <FormProvider {...methods}>
            <form>
                <Grid container spacing={3}>
                  <FormInput  name='firstName' label='First Name' required/>
                  <FormInput  name='lastName' label='Last Name' required/>
                  <FormInput  name='address1' label='Address' required/>
                  <FormInput  name='email' label='Email' required/>
                  <FormInput  name='city' label='City' required/>
                  <FormInput  name='zip' label='Zip/Postal Code' required/>
                  <FormInput  name='phone' label='Phone' required/>
                </Grid>
            </form>
        </FormProvider>
    </>
  )
}

export default AddressForm