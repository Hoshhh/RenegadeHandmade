import { Add, Remove } from '@mui/icons-material'
import { Container, Divider, IconButton, Typography } from '@mui/material'
import React from 'react'

type ItemProps = {
    img: string,
    name: string,
    quantity: number,
    price: number,
    id: string
}

const CartItem = (props: ItemProps) => {
  return (
    <>
        <Container sx={{ display: "flex", justifyContent: "space-between" }}>
            <img src={props.img} alt=""  style={{height: "100px", minWidth: "100px"}} />
            <Container>
                <Typography>{props.name}</Typography>
                <Typography>{props.id}</Typography>
            </Container>
            <Container>
                <Container disableGutters sx={{ display: "flex", alignItems: "center" }}>
                    <IconButton>
                        <Remove />
                    </IconButton>
                    <span style={{ width: "24px", height: "24px", borderRadius: "10px", border: "1px solid #1abc9c", display: "flex", alignItems: "center", justifyContent:"center" }}>{props.quantity}</span>
                    <IconButton>
                        <Add />
                    </IconButton>
                </Container>
                <Typography>${props.price * props.quantity}</Typography>
            </Container>
        </Container>
        <Divider sx={{ marginTop: "10px"}}/>
    </>
  )
}

export default CartItem