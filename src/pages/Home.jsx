import { useEffect } from "react"
import Navbar from "../components/Navbar"
import Hero from "../components/home/Hero"
import Vision from "../components/home/Vision"
import Path from "../components/home/Path"
import Icons from "../components/home/Icons"
import Support from "../components/home/Support"

const Home = () => {
  useEffect(()=>{

  })
  return (
    <div className="bg-black">
      <Navbar/>
      <Hero/>
      <Vision/>
      <Path/>
      <Icons/>
      <Support/>
    </div>
  )
}

export default Home
