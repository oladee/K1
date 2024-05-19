import { NavLink } from "react-router-dom"
import logo from "../assets/logo.svg"
import PrimaryButon from "./Buton"
import ham from "../assets/hammenu.svg"
import { useEffect} from "react"
import closeIcon from "../assets/close.svg"
const Navbar = () => {
  // const [mobileMenu, setMobileMenu] = useState(false)
  
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

  useEffect(()=>{
    const ham = document.getElementById('ham')
    const mobby = document.getElementById('mobby')
    const ul = document.querySelector('#mobby .ul')
    const closeIcon = document.querySelector('#closeIcon')
    const showSideBar = ()=>{
      mobby.classList.add('open')
      mobby.style.animation = "mymove 1s 1"
      if(mobby.classList.contains('open')){
        document.body.classList.add('bodyStiff')
      }else{
        document.body.classList.remove('bodyStiff')
      }
    }
    const stopUlpropagation = (e)=>{
      e.stopPropagation()
    }
    const mobbyClose = (e)=>{
      e.stopPropagation()
      mobby.classList.remove('open')
      document.body.classList.remove('bodyStiff')
    }

    const closeMobby = ()=>{
      mobby.style.animation = "mymoveopposite 1s 1"
      document.body.classList.remove('bodyStiff')
      setTimeout(()=>{
        mobby.classList.remove('open')
      },1000)
    }
    ham.addEventListener('click',showSideBar)
    ul.addEventListener('click',stopUlpropagation)
    mobby.addEventListener('click',mobbyClose)
    closeIcon.addEventListener('click', closeMobby)
  //   return ()=>{
  //     ham.removeEventListener('click',showSideBar);
  //     ul.removeEventListener('click',stopUlpropagation)
  //     mobby.removeEventListener('click',mobbyClose)
  //   closeIcon.removeEventListener('click', closeMobby)
  // }
  })

  return (
    <div className=" p-5 md:py-5 md:px-10 lg:px-20" id="nav">
      <div className="flex justify-between items-center lg:w-full">
      <NavLink to="/">
        <img src={logo} alt="" />
      </NavLink>
      <nav className="hidden lg:flex lg:justify-between lg:items-center" id="mobby">
        <div className="text-white lg:flex lg:items-center lg:gap-16 ul">
          <div className="flex justify-end">
            <img src={closeIcon} alt="close icon" className="lg:hidden w-14" id="closeIcon" />
          </div>
          <NavLink to="/">
              Home
          </NavLink>
          <NavLink to="/about">
              About Us
          </NavLink>
          <NavLink to="/goals">
              Our Goals
          </NavLink>
          <div className="flex lg:hidden">
          <PrimaryButon text="Get Involved"/>
          </div>
        </div>
    </nav>
      <div className="hidden lg:flex">
          <PrimaryButon text="Get Involved"/>
      </div>
    <img src={ham} alt="" className="w-14 lg:hidden" id="ham" />
    </div>
      <div id="herry" className="herry hidden">
      </div>
    </div>
  )
}

export default Navbar
