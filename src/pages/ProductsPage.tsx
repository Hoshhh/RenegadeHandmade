import { Container, Grid } from '@mui/material'
import ProductCard from '../components/ProductCard'
import React from 'react'

type ProductsProps = {
  products: any[];
}

const ProductsPage = (props: ProductsProps) => {
  return (
    <Container sx={{ marginTop: '10%' }}>
      <Grid container spacing={3}>
        {
          props.products.map((product) => (
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <ProductCard productName={product.name} img={product.image.url} price={product.price.formatted_with_symbol}></ProductCard>
            </Grid>
          ))
        }
      </Grid>
    </Container>
  )
}

export default ProductsPage