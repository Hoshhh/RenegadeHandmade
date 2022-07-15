import React from 'react'
import { Typography, Button, Divider } from '@mui/material'

type PaymentProps = {
  shippingData: {}
}

const PaymentForm = (props: PaymentProps) => {
  console.log(props.shippingData)
  return (
    <div>PaymentForm</div>
  )
}

export default PaymentForm