
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import CompanyLogo from './components/CompanyLogo'
import PurposeSection from './components/PurposeSection'
import FeaturesSection from './components/FeaturesSection'
import ScheduleSection from './components/ScheduleSection'

function App() {

  return (
    <main>
      <div>
        <Navbar/>
        <Hero/>
        <CompanyLogo/>
        <PurposeSection/>
        <FeaturesSection/>
        <ScheduleSection/>
      </div>
    </main>
  )
}

export default App
