import { Typography } from "@mui/material"
import { Link } from "react-router-dom"

const Logo = () => {
  return (
    <div style={{
      display: "flex",
      alignItems: "center",
      marginRight: "auto",
      gap: "8px",
    }}>
      <Link to="/">
        <img
          src="openai.png"
          alt="openai"
          height="30px"
          width="30px"
          className="image-inverted"
        />
      </Link>
      <Typography sx={{
        display: { md: "block", sm: "none", xs: "none" },
        fontWeight: 800,
        marginRight: "auto",
        textShadow: "2px 2px 20px #000",
      }}>
        <span style={{ fontSize: "20px" }}>MERN</span>-GPT
      </Typography>
    </div>
  )
}

export default Logo
