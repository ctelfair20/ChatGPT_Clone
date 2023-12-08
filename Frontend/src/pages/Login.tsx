import { Box, Button, Typography } from "@mui/material"
import { MdOutlineLogin } from "react-icons/md"
import CustomizedInput from "../components/shared/CustomizedInput"
import { useAuthContext } from "../context/AuthContext"
import toast from "react-hot-toast"

const Login = () => {
  const auth = useAuthContext();

  const onHandleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget)
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    console.log('email: ', email, 'pass: ', password);

    try {
      toast.loading("Signing In...", { id: "Login" })
      await auth?.login(email, password);
      toast.success("Sucessfully Signed In", { id: "Login" });
    } catch (error) {
      console.log("ERROR", error)
      toast.error("Sign In Failed", { id: "Login" })
    }
  }

  return (
    <Box
      width="100%"
      height="100%"
      display="flex"
      flex={1}
    >
      <Box
        padding={8}
        mt={8}
        display={{ md: "flex", sm: "none", sx: "none" }}
      >
        <img src="airobot.png" alt="Robot" style={{ width: "400px" }} />
      </Box>

      <Box
        display="flex"
        flex={{ sx: 1, md: 0.5 }}
        justifyContent="center"
        alignItems="center"
        padding={2}
        ml="auto"
        mt={16}
      >
        <form
          onSubmit={(e) => onHandleSubmit(e)}
          style={{
            margin: "auto",
            padding: "30px",
            boxShadow: "10px 10px 20px #000",
            borderRadius: "10px",
            border: "none",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography
              variant="h4"
              textAlign="center"
              padding={2}
              fontWeight={600}
            >
              Login
            </Typography>
            <CustomizedInput name="email" type="email" label="Email" />
            <CustomizedInput name="password" type="password" label="Password" />
            <Button type="submit"
              sx={{
                px: 2,
                py: 1,
                mt: 2,
                width: "400px",
                borderRadius: 2,
                bgcolor: "#00fffc",
                color: "black",
                ":hover": {
                  bgcolor: "white",
                  color: "black"
                }
              }}
              endIcon={<MdOutlineLogin />}
            >Login</Button>
          </Box>
        </form>
      </Box>
    </Box>
  )
}

export default Login