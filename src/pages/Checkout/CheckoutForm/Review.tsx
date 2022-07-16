import { List, ListItem, ListItemText, Typography } from '@mui/material'
import React from 'react'

type ReviewProps = {
  checkoutToken: any
}

const Review = (props: ReviewProps) => {
  return (
    <>
        <Typography variant='h6' gutterBottom>Order Summary</Typography>
        <List disablePadding>
            {
                props.checkoutToken.live.line_items.map((product) => (
                    <ListItem sx={{ padding: '10px 0'}} key={product.name}>
                        <ListItemText primary={product.name} secondary={`Quantity: ${product.quantity}`} />
                        <Typography variant='body2'>{product.line_total.formatted_with_symbol}</Typography>
                    </ListItem>
                ))
            }
            <ListItem sx={{ padding: '10px 0'}}>
                <ListItemText primary="Total" />
                <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                    {props.checkoutToken.live.subtotal.formatted_with_symbol}
                </Typography>
            </ListItem>
        </List>
    </>
  )
}

export default Review