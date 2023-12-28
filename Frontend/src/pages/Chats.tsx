import { Avatar, Box } from "@mui/material"

const Chats = () => {
  return (
    <Box sx={{ display: "flex", width: "100%", height: "100%", mt: 3, gap: 3, background: "red" }}>parent
      <Box sx={{ display: { md: "flex", xs: "none", sm: "none" }, background: "blue" }}>
        child
        <Box sx={{ display: "flex", width: "100%", height: "60vh", bgcolor: "rgb(17,29,39)", borderRadius: 5, flexDirection: "column", mx: 3 }}>
          grand child
          <Avatar sx={{ mx: "auto", my: 2, bgcolor: "white", color: "black", fontWeight: 700, }}></Avatar>
        </Box>
      </Box>
    </Box>
  )
}

export default Chats