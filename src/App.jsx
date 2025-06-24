
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import CompanyLogo from './components/CompanyLogo'
import PurposeSection from './components/PurposeSection'
import FeaturesSection from './components/FeaturesSection'
import ScheduleSection from './components/ScheduleSection'
import MoniterSection from './components/MoniterSection'
import PricingSection from './components/PricingSection'
import ServiceSection from './components/ServiceSection'
import TestimonialSection from './components/TestimonialSection'
import NewsLetterSection from './components/NewsLetterSection'
import FooterSection from './components/FooterSection'

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
        <MoniterSection/>
        <PricingSection/>
        <ServiceSection/>
        <TestimonialSection/>
        <NewsLetterSection/>
        <FooterSection/>
      </div>
    </main>
  )
}

export default App
