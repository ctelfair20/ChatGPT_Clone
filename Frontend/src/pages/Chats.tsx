import { Avatar, Box, Button, Typography } from "@mui/material"
import { useAuthContext } from "../context/AuthContext"
import { red } from "@mui/material/colors";

const Chats = () => {
  const auth = useAuthContext();

  return (
    <Box sx={{ display: "flex", width: "100%", height: "100%", mt: 3, gap: 3, background: "red" }}>parent
      <Box sx={{ display: { md: "flex", xs: "none", sm: "none" }, background: "blue" }}>
        child
        <Box sx={{ display: "flex", width: "100%", height: "60vh", bgcolor: "rgb(17,29,39)", borderRadius: 5, flexDirection: "column", mx: 3 }}>
          grand child
          <Avatar sx={{ mx: "auto", my: 2, bgcolor: "white", color: "black", fontWeight: 700, }}
          >
            {auth?.user?.name[0]}
          </Avatar>
          <Typography sx={{ mx: "auto", fontFamily: "work sans" }}>
            Welcome to your very own chatBot!
          </Typography>
          <Typography sx={{ mx: "auto", fontFamily: "work sans", my: 4, p: 3 }}>
            Ask it anything but be careful not to share personal info
          </Typography>
          <Button sx={{
            width: "200ox", mx: "auto", my: "auto", color: "white", fontWeight: 700, borderRadius: 3, bgcolor: red[300],
            ":hover": {
              bgcolor: red.A400
            }
          }}
          >
            Clear Conversation
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

export default Chats