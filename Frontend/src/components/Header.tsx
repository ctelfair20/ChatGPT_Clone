import { AppBar, Toolbar } from "@mui/material"
import { useAuthContext } from "../context/AuthContext";
import Logo from "./shared/Logo"
import NavigationLink from "./shared/NavigationLink";

const Header = () => {
  const auth = useAuthContext();

  return (
    <AppBar sx={{ bgcolor: "transparent", boxShadow: "none", position: "static", }}>
      {/* this toolbar seems is flexed by defualt */}
      <Toolbar>
        <Logo></Logo>
        <div>
          {auth?.isLoggedIn ? (
            <>
              <NavigationLink to="/chats" text="Chat List" textColor="black" bg="#00fffc" />
              <NavigationLink to="/" text="Logout" textColor="white" bg="#51538f" onClick={auth?.logout} />
            </>
          ) : (
            <>
              {/* onClick={auth?.login}...onClick={auth?.signup} */}
              <NavigationLink to="/login" text="Login" textColor="black" bg="#00fffc" />
              <NavigationLink to="/signup" text="Signup" textColor="white" bg="#51538f" />
            </>
          )}
        </div>
      </Toolbar>
    </AppBar>
  )
}

export default Header