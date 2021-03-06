import { Add, Remove } from '@mui/icons-material'
import { Box, Button, Container, Grid, IconButton, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

type ProductProps = {
  products: any[],
  onAddToCart: any
}

const SingleProductPage = (props: ProductProps) => {
    const { id } = useParams()
    const [image, setImage] = useState(props.products[id].assets[0].url)
    const [qty, setQty] = useState(1)

    const handleImageChange = (imgUrl: string) => {
        setImage(imgUrl)
    }

    const addQuantity = () => {
        setQty(qty + 1)
    }

    const subtractQuantity = () => {
        if (qty > 1) {
            setQty(qty - 1)
        }
    }

    console.log(props.products[id])
  return (
    <Stack direction="row" justifyContent="center" sx={{ marginLeft: "5%", marginRight: "5%", marginTop: "0px", display: { xs: "block", sm: "block", md: "flex"} }}>
        <Box flex={5} bgcolor="#F1EFF1" padding={2} sx={{ display: { xs: "block", sm: "block", md: "flex"}, minHeight: {sm: "25vh", md: "90vh"}, flexDirection: "column", justifyContent:"center", alignItems: "center" }}>
            <img src={image} alt="" style={{ maxWidth: "75%",  maxHeight: "500px", marginBottom: "5%", marginTop: "5%" }}/>
            <Container disableGutters sx={{ display: {xs: "none", sm: "none", md: "block" } }}>
                <Grid container spacing={0} sx={{ display: "flex", justifyContent: "center"}}>
                    {
                        props.products[id].assets.map((photo) => (
                            <Grid item xs={12} sm={6} md={4} lg={3}>
                                <img src={photo.url} alt="" onClick={() => handleImageChange(photo.url)} style={{ maxWidth: "80%", maxHeight: "121px", marginBottom: "5%", border: image === photo.url ? "3px solid #1abc9c": "" }}/>
                            </Grid>
                        ))
                    }
                </Grid>
            </Container>
        </Box>
        <Box flex={5} bgcolor="#F1EFF1" padding={2} sx={{ display: "flex", minHeight: {sm: "25vh", md: "90vh"}, flexDirection: "column", justifyContent:"center" }}>
            <Typography variant="h4" style={{ maxWidth: "100%", marginTop: "5%", marginBottom: "0.8em" }}>{props.products[id].name}</Typography>
            <Typography variant="body1" dangerouslySetInnerHTML={{ __html: props.products[id].description}}  style={{ marginBottom: "0.8em" }}/>
            <Typography variant="h5" style={{ marginBottom: "0.8em" }}>{props.products[id].price.formatted_with_symbol}</Typography>
            <Container disableGutters sx={{ display: "flex" }}>
                <Container disableGutters sx={{ display: "flex", alignItems: "center" }}>
                    <IconButton onClick={subtractQuantity}>
                        <Remove />
                    </IconButton>
                    <span style={{ width: "24px", height: "24px", borderRadius: "10px", border: "1px solid #1abc9c", display: "flex", alignItems: "center", justifyContent:"center" }}>{qty}</span>
                    <IconButton onClick={addQuantity}>
                        <Add />
                    </IconButton>
                </Container>
                <Button sx={{ backgroundColor: "#16a085", '&:hover': {backgroundColor: "#1abc9c"}, color: "white", lineHeight: "1", marginRight: "30%" }} onClick={() => props.onAddToCart(props.products[id].id, qty)}>Add to Cart</Button>
            </Container>
        </Box>
    </Stack>
  )
}

export default SingleProductPage