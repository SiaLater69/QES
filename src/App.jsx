import './App.css'
import Nav from './components/Nav'
import Hero from './Pages/Hero'
import About from './Pages/About'
import Indutries from './Pages/Indutries'
import Team from './components/TeamMember'
import Testimonial from './Pages/Testimonial'
import TeamPage from './components/TeamPage'
import JobsPage from './Pages/JobsPage'
import GetInTouch from './components/GetinTouch'
import Footer from './Pages/Footer'

function App() {
  return(
    <>
    <Nav/>
    <Hero/>
    <About/>
    <Indutries/>
    <Testimonial/>
    <TeamPage/>
    <JobsPage/>
    <GetInTouch/>
    <Footer/>
    </>
  )
  }

export default App
