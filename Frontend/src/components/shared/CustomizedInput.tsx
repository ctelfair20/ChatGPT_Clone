import { TextField } from "@mui/material"

type Props = {
  name: string,
  type: string,
  label: string,
}

function CustomizedInput({ name, type, label }: Props) {

  return (
    <TextField
      name={name}
      type={type}
      label={label}
    />
  )
}

export default CustomizedInput