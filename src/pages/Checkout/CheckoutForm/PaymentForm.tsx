import React from 'react'
import { Typography, Button, Divider } from '@mui/material'
import { Elements, CardElement, ElementsConsumer } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import Review from './Review'

type PaymentProps = {
  shippingData: any,
  checkoutToken: any,
  backStep: any,
  onCaptureCheckout: any,
  nextStep: any
}

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY)

const PaymentForm = (props: PaymentProps) => {
  const handleSubmit = async (event, elements, stripe) => {
    event.preventDefault();

    if (!stripe || !elements) return;

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({ type: 'card', card: cardElement });

    if (error) {
      console.log('[error]', error);
    } else {
      const orderData = {
        line_items: props.checkoutToken.live.line_items,
        customer: { firstname: props.shippingData.firstName, lastname: props.shippingData.lastName, email: props.shippingData.email },
        shipping: { 
          name: 'Primary', 
          street: props.shippingData.address1, 
          town_city: props.shippingData.city, 
          county_state: props.shippingData.shippingSubdivision, 
          postal_zip_code: props.shippingData.zip, 
          country: props.shippingData.shippingCountry 
        },
        fulfillment: { shipping_method: props.shippingData.shippingOption },
        payment: {
          gateway: 'stripe',
          stripe: {
            payment_method_id: paymentMethod.id,
          },
        },
      };

      props.onCaptureCheckout(props.checkoutToken.id, orderData);

      props.nextStep();
    }
  }

  console.log(props.shippingData)
  return (
    <>
      <Review checkoutToken={props.checkoutToken}/>
      <Divider />
      <Typography variant='h6' gutterBottom sx={{ margin: '20px 0' }}>Payment Method</Typography>
      <Elements stripe={stripePromise}>
        <ElementsConsumer>
          {({ elements, stripe }) => (
            <form onSubmit={(e) => handleSubmit(e, elements, stripe)}>
              <CardElement />
              <br /> <br />
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Button variant="outlined" onClick={props.backStep}>Back</Button>
                <Button type="submit" variant="contained" disabled={!stripe}>
                  Pay { props.checkoutToken.live.subtotal.formatted_with_symbol }
                </Button>
              </div>
            </form>
          )}
        </ElementsConsumer>
      </Elements>
    </>
  )
}

export default PaymentForm