import { NavLink } from "react-router-dom"
import logo from "../assets/logo.svg"
const Navbar = () => {
  return (
    <nav>
      <div>
        <img src={logo} alt="" />
      </div>
      <div className="text-white">
        <NavLink>
            Home
        </NavLink>
        <NavLink>
            About Us
        </NavLink>
        <NavLink>
            Our Goals
        </NavLink>
      </div>
    </nav>
  )
}

export default Navbar
