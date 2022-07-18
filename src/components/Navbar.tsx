import { Facebook, ShoppingCart } from '@mui/icons-material'
import { AppBar, Badge, Box, Button, IconButton, styled, Toolbar, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

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
  const numberOfItems = useSelector((state) => state["cart"].numberOfItems)

  return (
    <AppBar position="sticky" sx={{ backgroundColor: "rgba(255,255,255,0)", boxShadow: "none"}}>
      <StyledToolbar>
        <Link to="/" style={{ textDecoration: "none" }} >
          <Typography variant="h6" color="black" sx={{ display: { xs: "none", sm: "block"}, marginLeft: "20px", fontSize: "1.4em" }}>Renegade<span style={{ color: "#16a085"}}>Handmade</span></Typography>
          <Typography variant="h6" color="black" sx={{ display: { xs: "block", sm: "none"}, marginLeft: "20px" }}>Renegade</Typography>
        </Link>
        <div style={{ display: 'flex'}}>
          <Button component={Link} to='/contact' variant="contained" size="small" sx={{ margin: "auto", marginRight: "0px", backgroundColor: "black", '&:hover': {backgroundColor: "#34495e"}}}>Contact</Button>
          <Icons>
          <IconButton href='https://www.facebook.com/RenhandmadeCompany/' target="_blank">
            <Facebook fontSize="large" htmlColor='black'/>
          </IconButton>
          <Link to="/cart" style={{ textDecoration: "none" }} >
            <IconButton>
              <Badge badgeContent={numberOfItems} color="error">
                <ShoppingCart fontSize="large" htmlColor='black'/>
              </Badge>
            </IconButton>
          </Link>
        </Icons>
        </div>
      </StyledToolbar>
    </AppBar>
  )
}

export default Navbar