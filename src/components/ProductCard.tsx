import { Card, CardContent, CardMedia, Paper, Rating, Typography } from '@mui/material'
import React from 'react'

type ProductCardProps = {
  productName: string,
  img: string,
  price: number
}

const ProductCard = (props: ProductCardProps) => {
  return (
    <Paper elevation={3}>
        <Card sx={{ backgroundColor: "#F1EFF1", minHeight: "350px" }}>
            <CardMedia 
                component="img"
                height="230px"
                image={props.img}
                sx={{ marginBottom: "6px"}}
            />
            <CardContent sx={{ paddingBottom: "16px"}}>
                <Typography>{props.productName}</Typography>
                <Rating sx ={{ color: "#16a085" }} />
                <Typography>${props.price}</Typography>
            </CardContent>
        </Card>
    </Paper>
  )
}

export default ProductCard