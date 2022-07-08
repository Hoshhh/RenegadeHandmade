import { Card, CardContent, CardMedia, CardActions, Button, Paper, Rating, Typography } from '@mui/material'
import React from 'react'

type ProductCardProps = {
  productName: string,
  img: string,
  price: string
}

const ProductCard = (props: ProductCardProps) => {
  return (
    <Paper elevation={3} sx={{ backgroundColor: "#F1EFF1", minHeight: "350px", minWidth: "280px" }}>
        <Card sx={{ backgroundColor: "#F1EFF1", minHeight: "350px", minWidth: "280px" }}>
            <CardMedia 
                component="img"
                height="230px"
                image={props.img}
                sx={{ marginBottom: "6px"}}
            />
            <CardContent>
                <Typography>{props.productName}</Typography>
                <Rating sx={{ color: "#16a085" }} />
            </CardContent>
            <CardActions sx={{ paddingBottom: "0px", justifyContent: "space-between", marginTop: "auto", marginBottom: "0px" }}>
              <Typography>{props.price}</Typography>
              <Button size="small" sx={{ color: "#16a085" }}>
                Add to Cart
              </Button>
            </CardActions>
        </Card>
    </Paper>
  )
}

export default ProductCard