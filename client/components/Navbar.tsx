import Logo from "./Logo"
import TitleCard from "./TitleCard"
import '../styles/navbar.css'

export default function Navbar() {
    return (
        <div className="navbar">
          <Logo />
          <TitleCard />
          <span>Sign In</span>
        </div>
    )
}