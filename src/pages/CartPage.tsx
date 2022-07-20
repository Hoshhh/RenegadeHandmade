import { Container, Grid, styled, Typography, Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom';
import CartItem from '../components/CartItem';

type CartProps = {
  cart: { line_items: any[], subtotal: any },
  handleRemoveFromCart: any,
  handleEmptyCart: any,
  handleUpdateCartQty: any
}

const Buttons = styled(Button)({
  marginLeft: "10px",
  backgroundColor: "black",
  minWidth: "96px",
  marginTop: "20px",
  fontSize: "1.1em",
  '&:hover': {backgroundColor: "#34495e"}
})

const CartPage = (props: CartProps) => {
    let isEmpty = !props.cart.line_items
    if (props.cart.line_items.length<1) {
        isEmpty = true
    }

    const EmptyCart = () => {
        return (
            <Typography variant="subtitle1" style={{marginTop: "30px"}}>You have no items in your cart,
                <Link to="/products" style={{ textDecoration: "none", color: "#16a085" }}> checkout our products!</Link>
            </Typography>
        )
    }

    const FilledCart = () => {
        return (
            <>
                <Grid container spacing={3} sx={{ marginTop: "3%" }}>
                    {
                        props.cart.line_items.map((item) => (
                            <Grid item xs={12} key={item.id}>
                                <CartItem 
                                    img={item.image.url} 
                                    name={item.name} 
                                    quantity={item.quantity} 
                                    price={item.price.raw} 
                                    id={item.id} 
                                    handleUpdateCartQty={props.handleUpdateCartQty}
                                    handleRemoveFromCart={props.handleRemoveFromCart}
                                />
                            </Grid>
                        ))
                    }
                </Grid>
                <Container sx={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "5%", flexDirection: {xs: "column", sm: "row"}, width: "100%" }}>
                    <Container sx={{ marginLeft: "auto", marginRight: {xs: "auto", sm: "0"}, width: "70%", display: "flex"}}>
                        <Typography variant="h4">Subtotal: {props.cart.subtotal.formatted_with_symbol}</Typography>
                    </Container>
                    <Container sx={{ marginLeft: "auto", marginRight: {xs: "auto", sm: "0"}, width: "70%", display: "flex"}}>
                        <Buttons variant='contained' onClick={props.handleEmptyCart}>Empty</Buttons>
                        <Link to="/checkout" style={{ textDecoration: "none" }} >
                            <Buttons variant='contained' sx={{ backgroundColor: "#16a085", '&:hover': {backgroundColor: "#1abc9c"} }}>Checkout</Buttons>
                        </Link>
                    </Container>
                </Container>
            </>
        )
    }
    
  return (
    <Container>
        <Typography variant="h4" gutterBottom sx={{marginTop: "3%"}}>Your Shopping Cart</Typography>
        { isEmpty ? <EmptyCart /> : <FilledCart />}
    </Container>
  )
}

export default CartPage