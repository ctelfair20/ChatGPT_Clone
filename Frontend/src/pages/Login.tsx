import { Box } from "@mui/material"

const Login = () => {
  return (
    <Box
      width="100%"
      height="100%"
      display="flex"
      flex={1}
      style={{ background: 'red' }}
    >
      RED
      <Box
        padding={8}
        mt={8}
        display={{ md: "flex", sm: "none", sx: "none" }}
      >
        <img src="airobot.png" alt="Robot" style={{ width: "400px" }} />
        <Box style={{ background: 'green' }}>Flexing?</Box>
      </Box>

      <Box
        display="flex"
        flex={{ sx: 1, md: 0.5 }}
        justifyContent="center"
        alignItems="center"
        padding={2}
        ml="auto"
        mt={16}
        style={{ background: "blue" }}
      >
      </Box>
    </Box>
  )
}

export default Login