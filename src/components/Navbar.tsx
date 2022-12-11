import { AppBar, Box, Toolbar } from "@mui/material"


export const Navbar = () => {
  return (
    <Box sx={{flexGrow: 1}}>
      <AppBar position="static">
        <Toolbar></Toolbar>
      </AppBar>
    </Box>
  )
}