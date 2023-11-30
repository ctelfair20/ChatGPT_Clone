import { Box } from "@mui/material"

const Login = () => {
  return (
    <Box width={'100%'} height={'100%'} display='flex' flex={1} style={{ background: 'red' }}
    >
      <Box padding={8} mt={8} display={{ md: "flex", sm: "none", sx: "none" }}>
        <img src="airobot.png" alt="Robot" style={{ width: "400px" }} />
      </Box>
      <Box></Box>
    </Box>
  )
}

export default Login