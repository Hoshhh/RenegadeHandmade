import { Card, CardContent, CardMedia, CardActions, Button, Paper, Rating, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

type ProductCardProps = {
  productName: string,
  img: string,
  price: string,
  onAddToCart:any,
  productId: string,
  p: number
}

const ProductCard = (props: ProductCardProps) => {
  return (
    <Paper elevation={3} sx={{ backgroundColor: "#F1EFF1", minHeight: "350px", minWidth: "280px" }}>
        <Card sx={{ backgroundColor: "#F1EFF1", minHeight: "350px", minWidth: "280px" }}>
          <Link to={`${props.p}`} style={{ textDecoration: "none" }}>
            <CardMedia 
                component="img"
                height="230px"
                image={props.img}
                sx={{ marginBottom: "6px"}}
            />
          </Link>
            <CardContent>
                <Link to={`${props.p}`} style={{ textDecoration: "none" }}>
                  <Typography>{props.productName}</Typography>
                </Link>
                <Rating sx={{ color: "#16a085" }} />
            </CardContent>
            <CardActions sx={{ paddingBottom: "0px", justifyContent: "space-between", marginTop: "auto", marginBottom: "0px" }}>
              <Typography>{props.price}</Typography>
              <Button size="small" sx={{ color: "#16a085" }} onClick={() => props.onAddToCart(props.productId, 1)} >
                Add to Cart
              </Button>
            </CardActions>
        </Card>
    </Paper>
  )
}

export default ProductCard