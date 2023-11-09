import { AppBar, Toolbar } from "@mui/material"
import Logo from "./shared/Logo"

const Header = () => {
  return (
    <AppBar sx={{ bgcolor: "transparent", boxShadow: "none", position: "static", }}>
      {/* this toolbar seems is flexed by defualt */}
      <Toolbar>
        <Logo></Logo>
      </Toolbar>
    </AppBar>
  )
}

export default Header