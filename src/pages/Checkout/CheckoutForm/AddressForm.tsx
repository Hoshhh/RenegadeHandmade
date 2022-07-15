import React, { useEffect, useState } from 'react'
import { InputLabel, Select, MenuItem, Button, Grid, Typography } from '@mui/material'
import { useForm, FormProvider } from 'react-hook-form'
import FormInput from './FormInput'
import { commerce } from '../../../lib/commerce'
import { Link } from 'react-router-dom'

type AdressFormProps = {
  checkoutToken: any,
  next: any
}

const AddressForm = (props: AdressFormProps) => {
    const methods = useForm()
    const [shippingCountries, setShippingCountries] = useState({})
    const [shippingCountry, setShippingCountry] = useState('')
    const [shippingSubdivisions, setShippingSubdivisions] = useState({})
    const [shippingSubdivision, setShippingSubdivision] = useState('')
    const [shippingOptions, setShippingOptions] = useState([])
    const [shippingOption, setShippingOption] = useState('')

    const countries = Object.entries(shippingCountries).map(([code, name]) => ({id: code, label: String(name)}))
    const subdivisions = Object.entries(shippingSubdivisions).map(([code, name]) => ({id: code, label: String(name)}))
    const options  = shippingOptions.map((sO) => ({ id: sO.id, label: `${sO.description} - (${sO.price.formatted_with_symbol})` }))

    const fetchShippingCountries = async(checkoutTokenId) => {
      const { countries } = await commerce.services.localeListShippingCountries(checkoutTokenId)

      setShippingCountries(countries)
      setShippingCountry(Object.keys(countries)[0])
    }

    const fetchSubdivisions = async(countryCode) => {
      const { subdivisions } = await commerce.services.localeListSubdivisions(countryCode)

      setShippingSubdivisions(subdivisions)
      setShippingSubdivision(Object.keys(subdivisions)[0])
    }

    const fetchShippingOptions = async(checkoutTokenId, country, region = null) => {
        const options = await commerce.checkout.getShippingOptions(checkoutTokenId, { country, region })

        setShippingOptions(options)
        setShippingOption(options[0].id)
    }

    useEffect(() => {
      fetchShippingCountries(props.checkoutToken.id)
    }, [])

    useEffect(() => {
      if (shippingCountry) fetchSubdivisions(shippingCountry)
    }, [shippingCountry])

    useEffect(() => {
        if (shippingSubdivision) fetchShippingOptions(props.checkoutToken.id, shippingCountry, shippingSubdivision)
    }, [shippingSubdivision])

    //onSubmit={methods.handleSubmit((data) => next({ ...data, shippingCountry, shippingSubdivision, shippingOption }))}

  return (
    <>
        <Typography variant="h6" gutterBottom>Shipping Address</Typography>
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit((data) => props.next({ ...data, shippingCountry, shippingSubdivision, shippingOption }))}>
                <Grid container spacing={3}>
                  <FormInput  name='firstName' label='First Name' required/>
                  <FormInput  name='lastName' label='Last Name' required/>
                  <FormInput  name='address1' label='Address' required/>
                  <FormInput  name='email' label='Email' required/>
                  <FormInput  name='city' label='City' required/>
                  <FormInput  name='zip' label='Zip/Postal Code' required/>
                  <FormInput  name='phone' label='Phone' required/>
                  <Grid item xs={12} sm={6}>
                    <InputLabel>Shipping Country</InputLabel>
                    <Select value={shippingCountry} fullWidth onChange={(e) => setShippingCountry(e.target.value)}>
                      {
                        countries.map((country) => (
                          <MenuItem key={country.id} value={country.id}>
                            {country.label}
                          </MenuItem>
                        ))
                      }
                    </Select>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <InputLabel>State</InputLabel>
                    <Select value={shippingSubdivision} fullWidth onChange={(e) => setShippingSubdivision(e.target.value)}>
                      {
                        subdivisions.map((subdivision) => (
                          <MenuItem key={subdivision.id} value={subdivision.id}>
                            {subdivision.label}
                          </MenuItem>
                        ))
                      }
                    </Select>
                  </Grid>
                  <Grid item xs={12} sm={6} >
                            <InputLabel>Shipping Options</InputLabel>
                            <Select value={shippingOption} fullWidth onChange={(e) => setShippingOption(e.target.value)}>
                                {options.map((option) => (
                                    <MenuItem key={option.id} value={option.id} >
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </Select>
                        </Grid>
                </Grid>
                <br />
                <div style={{ display: 'flex', justifyContent: 'space-between'}}>
                    <Button component={Link} to="/cart" variant="outlined"  sx={{ backgroundColor: "black", '&:hover': {backgroundColor: "#34495e"}, color: "white" }}>Back to Cart</Button>
                    <Button type="submit" variant="contained" sx={{ backgroundColor: "#16a085", '&:hover': {backgroundColor: "#1abc9c"} }} >Next</Button>
                </div>
            </form>
        </FormProvider>
    </>
  )
}

export default AddressForm