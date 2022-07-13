import { Container, Grid, Typography } from '@mui/material'
import ProductCard from '../components/ProductCard'
import React from 'react'
import { Outlet } from 'react-router-dom'

type ProductsProps = {
  products: any[],
  onAddToCart:any
}

const ProductsPage = (props: ProductsProps) => {
  return (
    <Container sx={{ marginTop: '10%' }}>
      <Typography variant="h5" sx={{ marginBottom: "1em" }}>All Products</Typography>
      <Grid container spacing={3}>
        {
          props.products.map((product, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <ProductCard 
                p={index} 
                productName={product.name} 
                img={product.image.url} 
                price={product.price.formatted_with_symbol} 
                productId={product.id} onAddToCart={props.onAddToCart}></ProductCard>
            </Grid>
          ))
        }
      </Grid>
    </Container>
  )
}

export default ProductsPage