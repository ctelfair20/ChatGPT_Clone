import { Avatar, Box, Button, Typography } from "@mui/material"
import { useAuthContext } from "../context/AuthContext"
import { red } from "@mui/material/colors";

const chatsMessages = [
  { "role": "user", "content": "Hello, AI assistant!" },
  { "role": "assistant", "content": "Hi there! How can I help you today?" },
  { "role": "user", "content": "I need information about weather forecasts." },
  { "role": "assistant", "content": "Sure! In which location would you like to know the weather?" },
  { "role": "user", "content": "Provide the weather forecast for New York." },
  { "role": "assistant", "content": "The weather in New York is currently 72°F with clear skies." },
  { "role": "user", "content": "What's on my calendar for today?" },
  { "role": "assistant", "content": "Let me check. You have a meeting at 2:00 PM and a deadline at 5:00 PM." },
  { "role": "user", "content": "Set a reminder for my meeting." },
  { "role": "assistant", "content": "Reminder set for your meeting at 2:00 PM." },
]

const Chats = () => {
  const auth = useAuthContext();

  return (
    <Box sx={{ display: "flex", width: "100%", height: "100%", mt: 3, gap: 3 }}>
      <Box sx={{ display: { md: "flex", xs: "none", sm: "none", flex: 0.2, flexDirection: "column", } }}>
        <Box sx={{ display: "flex", width: "100%", height: "60vh", bgcolor: "rgb(17,29,39)", borderRadius: 5, flexDirection: "column", mx: 3 }}>
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
            width: "200px", mx: "auto", my: "auto", color: "white", fontWeight: 700, borderRadius: 3, bgcolor: red[300],
            ":hover": {
              bgcolor: red.A400
            }
          }}
          >
            Clear Conversation
          </Button>
        </Box>
      </Box>
      <Box sx={{ display: "flex", flex: { md: "0.8", sm: 1, xs: 1 }, flexDirection: "column", px: 3, }}>
        <Typography sx={{ fontSize: "40px", color: "white", mb: 2, mx: "auto", fontWeight: "600" }}
        >
          Model - GPT 3.5 Turbo
        </Typography>
        <Box sx={{ width: "100%", height: "60vh", borderRadius: 3, mx: "auto", display: "flex", flexDirection: "column", overflow: "scroll", overflowX: "hidden", overflowY: "auto", scrollBehavior: "smooth" }}
        >
          {chatsMessages.map((chat) => <div>{chat.content}</div>)}
        </Box>
      </Box>
    </Box>
  )
}

export default Chats