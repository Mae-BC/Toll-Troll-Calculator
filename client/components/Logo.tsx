import { Link } from "react-router-dom"

export default function Logo() {
  return (
    <div>
      <Link to="/">
        <img src="images/logo.png" className="logo-image" alt="Troll Toll Logo"></img>
      </Link>
    </div>
  )
}
