import { Facebook, ShoppingCart } from '@mui/icons-material'
import { AppBar, Badge, Box, Button, styled, Toolbar, Typography } from '@mui/material'

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between"
})

const Icons = styled(Box)({
  display: "flex",
  gap: "40px",
  marginLeft: "40px",
  marginRight: "20px",
})

const Navbar = () => {
  return (
    <AppBar position="sticky" sx={{ backgroundColor: "rgba(255,255,255,0)", boxShadow: "none"}}>
      <StyledToolbar>
        <Typography variant="h6" color="black" sx={{ display: { xs: "none", sm: "block"}, marginLeft: "20px" }}>Renegade Handmade</Typography>
        <Typography variant="h6" color="black" sx={{ display: { xs: "block", sm: "none"}, marginLeft: "20px" }}>Renegade</Typography>
        <Button variant="contained" size="small" sx={{ margin: "auto", marginRight: "0px", backgroundColor: "black"}}>Contact</Button>
        <Icons>
          <Facebook fontSize="large" htmlColor='black'/>
          <Badge badgeContent={3} color="error">
            <ShoppingCart fontSize="large" htmlColor='black'/>
          </Badge>
        </Icons>
      </StyledToolbar>
    </AppBar>
  )
}

export default Navbar