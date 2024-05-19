import { NavLink } from "react-router-dom"
import logo from "../assets/logo.svg"
import PrimaryButon from "./Buton"
import ham from "../assets/hammenu.svg"
import { useEffect} from "react"
const Navbar = () => {
  
  useEffect(()=>{
    const nav = document.getElementById('nav')
    const herry = document.getElementById('herry')
    const navOff = nav.offsetTop
    const getScroll = ()=> {
      if(window.scrollY > navOff){
        nav.classList.add('sticky')
        herry.classList.add('scrollWatcher')
      }else{
        nav.classList.remove('sticky')
        herry.classList.remove('scrollWatcher')
      }
    }
    window.addEventListener('scroll',getScroll)
    return ()=> window.removeEventListener('scroll', getScroll)
  })
  return (
    <div className=" p-5 md:py-5 md:px-10 lg:px-20" id="nav">
      <div className="flex justify-between items-center">
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
      <div id="herry" className="herry hidden">

      </div>
    </div>
  )
}

export default Navbar
