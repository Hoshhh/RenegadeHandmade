import { Facebook, ShoppingCart } from '@mui/icons-material'
import { AppBar, Badge, Box, styled, Toolbar, Typography } from '@mui/material'

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between"
})

const Icons = styled(Box)({
  display: "flex",
  gap: "20px"
})

const Navbar = () => {
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block"} }}>Renegade Handmade</Typography>
        <Typography variant="h6" sx={{ display: { xs: "block", sm: "none"} }}>Renegade</Typography>
        <Icons>
          <Facebook fontSize="large"/>
          <Badge badgeContent={3} color="error">
            <ShoppingCart fontSize="large" />
          </Badge>
        </Icons>
      </StyledToolbar>
    </AppBar>
  )
}

export default Navbar