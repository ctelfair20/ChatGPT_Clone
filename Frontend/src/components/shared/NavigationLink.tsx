import { Link } from "react-router-dom"

type Props = {
  to: string,
  bg: string,
  text: string,
  textColor: string,
  onClick?: () => Promise<void>
}
const NavigationLink = ({ to, text, textColor, bg }: Props) => {
  return <Link to={to} style={{ color: textColor, background: bg }}>{text}</Link>
}

export default NavigationLink