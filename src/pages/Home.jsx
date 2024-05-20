import { useEffect } from "react"
import Navbar from "../components/Navbar"
import Hero from "../components/home/Hero"
import Vision from "../components/home/Vision"
import Path from "../components/home/Path"
import Icons from "../components/home/Icons"
import Support from "../components/home/Support"
import Footer from "../components/Footer"

const Home = () => {
  return (
    <div className="bg-black">
      <Navbar/>
      <Hero/>
      <Vision/>
      <Path/>
      <Icons/>
      <Support/>
      <Footer/>
    </div>
  )
}

export default Home
