import React from 'react'
import { TextField, Grid } from '@mui/material'
import { useFormContext, Controller } from 'react-hook-form'

type PropTypes = {
  name: string,
  label: string,
  required: boolean
}

const FormInput = (props: PropTypes) => {
  const {control} = useFormContext()
  return (
    <Grid item xs={12} sm={6}>
        <Controller 
          render={({ field }) => <TextField { ...field } label={props.label} fullWidth required/> }
          control={control}
          defaultValue=""
          name={props.name}
        />
    </Grid>
  )
}

export default FormInput