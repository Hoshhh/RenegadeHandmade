import { Button, CircularProgress, Container, Divider, Paper, Step, StepLabel, Stepper, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import AddressForm from './CheckoutForm/AddressForm'
import PaymentForm from './CheckoutForm/PaymentForm'
import { commerce } from '../../lib/commerce'
import { Link } from 'react-router-dom'

const steps = ['Shipping Address', 'Payment Details']

type CheckoutProps = {
  cart: any,
  order: any,
  onCaptureCheckout: any,
  error: any
}

const CheckoutPage = (props: CheckoutProps) => {
    const [activeStep, setActiveStep] = useState(0)
    const [checkoutToken, setCheckoutToken] = useState(null)
    const [shippingData, setShippingData] = useState({})

    useEffect(() => {
        const generateToken = async () => {
            try {
                const token = await commerce.checkout.generateToken(props.cart.id, {type: 'cart'})
                setCheckoutToken(token)
                console.log(checkoutToken)
            } catch (error) {
                console.log(error)
            }
        }

        generateToken()
    }, [props.cart])

    const nextStep = () => setActiveStep((prevActiveStep) => prevActiveStep + 1)
    const backStep = () => setActiveStep((prevActiveStep) => prevActiveStep - 1)

    const next = (data) => {
        setShippingData(data)

        nextStep()
    }

    let Confirmation = () => props.order.customer ? (
        <>
            <div>
                <Typography variant="h5">Thank you for your purchase, </Typography>
                <Divider />
                <Typography variant="subtitle2">Order ref: </Typography>
                <br/>
                <Button component={Link} to="/" type="button">Back to Home</Button>
            </div>
        </>
    ) : (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center"}}>
            <CircularProgress />
        </div>
    );

    if(props.error) {
        <>
            <Typography variant="h5">Error: {props.error}</Typography>
            <br/>
            <Button component={Link} to="/" type="button">Back to Home</Button>
        </>
    }

    console.log(props.order)
    const Form = () => activeStep === 0 
        ? <AddressForm checkoutToken={checkoutToken} next={next}/> 
        : <PaymentForm 
            shippingData={shippingData} 
            checkoutToken={checkoutToken} 
            backStep={backStep} 
            onCaptureCheckout={props.onCaptureCheckout}
            nextStep={nextStep}
        />

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
                    activeStep === steps.length ? <Confirmation /> : checkoutToken && <Form />
                }
            </Paper>
        </Container>
    </>
  )
}

export default CheckoutPage