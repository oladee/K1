import { NavLink } from "react-router-dom"
import logo from "../assets/logo.svg"
import PrimaryButon from "./Buton"
import ham from "../assets/hammenu.svg"
const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-5 md:py-5 md:px-10 lg:px-20">
      <nav className="flex justify-between items-center md:w-full ">
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
    <img src={ham} alt="" className="w-14 md:hidden" />
    </div>
  )
}

export default Navbar
