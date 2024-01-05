import { useRef, useState } from "react";
import { Avatar, Box, Button, IconButton, Typography } from "@mui/material"
import { red } from "@mui/material/colors";
import { IoMdSend } from "react-icons/io"
import { useAuthContext } from "../context/AuthContext"
import ChatItem from "../components/chat/ChatItem";

type Message = {
  role: "user" | "assistant";
  content: string;
}

const Chats = () => {
  const auth = useAuthContext();
  const [chatMessages, setChatMessages] = useState<Message[]>([])
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleSubmit = async () => {
    const userContent = inputRef.current?.value as string;
    if (inputRef && inputRef.current) {
      inputRef.current.value = "";
    }
    const newMessage: Message = { role: "user", content: userContent };
    setChatMessages((prev) => [...prev, newMessage])
  }

  return (
    <Box sx={{ display: "flex", width: "100%", height: "100%", mt: 3, gap: 3 }}>
      <Box sx={{ display: { md: "flex", xs: "none", sm: "none", flex: 0.2, flexDirection: "column", } }}>
        <Box sx={{ display: "flex", width: "100%", height: "60vh", bgcolor: "rgb(17,29,39)", borderRadius: 5, flexDirection: "column", mx: 3 }}>
          <Avatar sx={{ mx: "auto", my: 2, bgcolor: "white", color: "black", fontWeight: 700, }}
          >
            {/* TODO:fix this to know the difference between one or two names */}
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
          {chatMessages.map((chat, index) => <ChatItem role={chat.role} content={chat.content} key={index} />)}
        </Box>
        <div style={{ width: "100%", backgroundColor: "rgb(17,27,39)", padding: "20px", borderRadius: "8px", display: "flex", margin: "auto", }}>
          <input ref={inputRef} type="text" style={{ width: "100%", backgroundColor: "transparent", padding: "10px", border: "none", outline: "none", color: "white", fontSize: "20px" }} />
          <IconButton onClick={handleSubmit} sx={{ ml: "auto", color: "white" }}
          >
            <IoMdSend />
          </IconButton>
        </div>
      </Box>
    </Box>
  )
}

export default Chats