import { Card, CardContent, CardMedia, Paper, Rating, Typography } from '@mui/material'
import React from 'react'

const ProductCard = () => {
  return (
    <Paper elevation={3}>
        <Card sx={{ backgroundColor: "#F1EFF1", minHeight: "350px" }}>
            <CardMedia 
                component="img"
                height="230px"
                image="Images\ProductExamples\cuttingboard0.jpg"
                sx={{ marginBottom: "6px"}}
            />
            <CardContent sx={{ paddingBottom: "16px"}}>
                <Typography>Cutting Board</Typography>
                <Rating sx ={{ color: "#16a085" }} />
                <Typography>$50.00</Typography>
            </CardContent>
        </Card>
    </Paper>
  )
}

export default ProductCard