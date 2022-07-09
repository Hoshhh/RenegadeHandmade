import { Container, Grid, Paper, styled } from '@mui/material'
import ProductCard from './ProductCard'

const StyledPaper = styled(Paper)({
    minHeight: "350px",
    backgroundColor: "#F1EFF1",
})

type FeaturedProps = {
  onAddToCart:any
}

const FeaturedProducts = (props: FeaturedProps) => {
  return (
    <Container sx={{ paddingLeft: "48px", paddingRight: "48px", paddingBottom: "48px" }}>
        <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <ProductCard img='Images\ProductExamples\cuttingboard0.jpg' productName='Cutting Board' price={"$49.99"} onAddToCart={props.onAddToCart} productId={"asasas"} p={1000} />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <ProductCard img='Images\ProductExamples\cuttingboard0.jpg' productName='Cutting Board' price={"$49.99"} onAddToCart={props.onAddToCart} productId={"asasas"} p={1000} />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <ProductCard img='Images\ProductExamples\cuttingboard0.jpg' productName='Cutting Board' price={"$49.99"} onAddToCart={props.onAddToCart} productId={"asasas"} p={1000} />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <ProductCard img='Images\ProductExamples\cuttingboard0.jpg' productName='Cutting Board' price={"$49.99"} onAddToCart={props.onAddToCart} productId={"asasas"} p={1000} />
            </Grid>
        </Grid>
    </Container>
  )
}

export default FeaturedProducts