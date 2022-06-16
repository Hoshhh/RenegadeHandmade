import { Container, Grid, Paper, styled } from '@mui/material'
import ProductCard from './ProductCard'

const StyledPaper = styled(Paper)({
    minHeight: "350px",
    backgroundColor: "#F1EFF1",
})

const FeaturedProducts = () => {
  return (
    <Container sx={{ paddingLeft: "48px", paddingRight: "48px", paddingBottom: "48px" }}>
        <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <ProductCard />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <ProductCard />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <ProductCard />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <ProductCard />
            </Grid>
        </Grid>
    </Container>
  )
}

export default FeaturedProducts