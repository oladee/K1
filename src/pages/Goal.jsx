import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import GoalHero from "../components/goals/GoalHero"
import GoalPath from "../components/goals/GoalPath"
import GoalSupport from "../components/goals/GoalSupport"


const Goal = () => {
  return (
    <div className="bg-black">
      <Navbar/>
      <GoalHero/>
      <GoalPath/>
      <GoalSupport/>
      <Footer/>
    </div>
  )
}

export default Goal
