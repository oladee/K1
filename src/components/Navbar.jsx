import { NavLink } from "react-router-dom"
import logo from "../assets/logo.svg"
import PrimaryButon from "./Buton"
const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-5 md:py-5 md:px-10 lg:px-20">
      <div>
        <img src={logo} alt="" />
      </div>
      <div className="text-white hidden md:flex items-center gap-4 lg:gap-16">
        <NavLink to="/">
            Home
        </NavLink>
        <NavLink to="/about">
            About Us
        </NavLink>
        <NavLink to="/goals">
            Our Goals
        </NavLink>
      </div>
      <div className="hidden md:flex">
        <PrimaryButon text="Get Involved"/>
      </div>
    </nav>
  )
}

export default Navbar
