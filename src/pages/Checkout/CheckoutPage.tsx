import { Container, Paper, Step, StepLabel, Stepper, Typography } from '@mui/material'
import React, { useState } from 'react'
import AddressForm from './CheckoutForm/AddressForm'
import PaymentForm from './CheckoutForm/PaymentForm'

const steps = ['Shipping Address', 'Payment Details']

const CheckoutPage = () => {
    const [activeStep, setActiveStep] = useState(0)

    const Confirmation = () => (
        <div>Confirmation</div>
    )
    const Form = () => activeStep === 0 ? <AddressForm /> : <PaymentForm />

  return (
    <>
        <Container sx={{ display: "flex", justifyContent: "center"}}>
            <Paper sx={{backgroundColor: "#F1EFF1", height: "100%", marginTop: "50px", maxWidth: "80%", minWidth: "60%", padding: "24px"}}>
                <Typography variant="h4" align='center'>Checkout</Typography>
                <Stepper activeStep={activeStep} sx={{ marginBottom: "25px" }}>
                    {
                        steps.map((step) => (
                            <Step key={step}>
                                <StepLabel>{step}</StepLabel>
                            </Step>
                        ))
                    }
                </Stepper>
                {
                    activeStep === steps.length ? <Confirmation /> : <Form />
                }
            </Paper>
        </Container>
    </>
  )
}

export default CheckoutPage