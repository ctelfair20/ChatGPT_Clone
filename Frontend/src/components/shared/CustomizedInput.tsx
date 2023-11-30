import { TextField } from "@mui/material"

type Props = {
  name: string,
  type: string,
  label: string,
}

function CustomizedInput({ name, type, label }: Props) {

  return (
    <TextField
      InputLabelProps={{
        style: { color: "white" }
      }}
      InputProps={{
        style: {
          width: "400px",
          borderRadius: "10px",
          fontSize: "20px",
          color: "white"
        }
      }}
      name={name}
      type={type}
      label={label}
    />
  )
}

export default CustomizedInput