import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import AboutHero from "../components/about/AboutHero"
import Mission from "../components/about/Mission"
import Profit from "../components/about/Profit"
import Source from "../components/about/Source"


const About = () => {
  return (
    <div className="bg-black">
      <Navbar/>
      <AboutHero/>
      <Mission/>
      <Profit/>
      <Source/>
      <Footer/>
    </div>
  )
}

export default About
