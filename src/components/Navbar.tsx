import { Facebook, ShoppingCart } from '@mui/icons-material'
import { AppBar, Badge, Box, Button, IconButton, styled, Toolbar, Typography } from '@mui/material'

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between"
})

const Icons = styled(Box)({
  display: "flex",
  gap: "30px",
  marginLeft: "40px",
  marginRight: "20px",
})

const Navbar = () => {
  return (
    <AppBar position="sticky" sx={{ backgroundColor: "rgba(255,255,255,0)", boxShadow: "none"}}>
      <StyledToolbar>
        <Typography variant="h6" color="black" sx={{ display: { xs: "none", sm: "block"}, marginLeft: "20px", fontSize: "1.4em" }}>Renegade<span style={{ color: "#16a085"}}>Handmade</span></Typography>
        <Typography variant="h6" color="black" sx={{ display: { xs: "block", sm: "none"}, marginLeft: "20px" }}>Renegade</Typography>
        <Button variant="contained" size="small" sx={{ margin: "auto", marginRight: "0px", backgroundColor: "black", '&:hover': {backgroundColor: "#34495e"}}}>Contact</Button>
        <Icons>
          <IconButton>
            <Facebook fontSize="large" htmlColor='black'/>
          </IconButton>
          <IconButton>
            <Badge badgeContent={3} color="error">
              <ShoppingCart fontSize="large" htmlColor='black'/>
            </Badge>
          </IconButton>
        </Icons>
      </StyledToolbar>
    </AppBar>
  )
}

export default Navbar