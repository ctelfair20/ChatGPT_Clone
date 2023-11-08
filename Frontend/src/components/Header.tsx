import { AppBar, Box, Toolbar } from "@mui/material"

const Header = () => {
  return (
    <AppBar sx={{ bgcolor: "transparent", boxShadow: "none", position: "static" }}>
      <Toolbar>
        asdfghj
        <Box sx={{ bgcolor: "red", height: "100px", width: "100px" }}></Box>
      </Toolbar>
    </AppBar>
  )
}

export default Header