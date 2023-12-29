import { Avatar, Box, Typography } from "@mui/material"
import { useAuthContext } from "../../context/AuthContext"

const ChatItem = ({ role, content }: { role: "user" | "assistant", content: string }) => {
  const auth = useAuthContext();

  return (
    role === "assistant" ? (
      <Box sx={{ display: "flex", p: 2, my: 1, gap: 2, bgcolor: "#004d5612" }}>
        <Avatar sx={{ bgcolor: "white", color: "black" }}>
          <img src="openai.png" alt="openai" width={"30px"} />
        </Avatar>
        <Box>
          <Typography fontSize={"20px"}>{content}</Typography>
        </Box>
      </Box>
    ) : (
      <Box sx={{ display: "flex", p: 2, my: 1, gap: 2, bgcolor: "#004d56" }}>
        <Avatar sx={{ bgcolor: "white", color: "black" }}>
          {auth?.user?.name[0]}
        </Avatar>
        <Box >
          <Typography fontSize={"20px"}>{content}</Typography>
        </Box>
      </Box>
    )
  )
}

export default ChatItem