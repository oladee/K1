import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Goal from "./pages/Goal"


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>}/>
        <Route path="/goals" element={<Goal/>}/>
      </Routes>
    </>
  )
}

export default App
