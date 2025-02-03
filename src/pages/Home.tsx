import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/Home/HeroSection/Hero/Hero'
import Banners from '../components/Home/BannersSection/Banners/Banners'
import Info from '../components/Home/InfoSection/Info/Info'
import Special from '../components/Home/SpecialSection/Special/Special'
import Reviews from '../components/Home/ReviewsSection/Reviews/Reviews'
import Faq from '../components/Home/FaqSection/Faq/Faq'
import Course from '../components/Home/CourseSection/Course/Course'
import Contact from '../components/Home/ContactSection/Contact/Contact'
import Footer from '../components/Footer/Footer'

const Home = () => {

   return (
      <>
         <Navbar />
         <Hero />
         <Banners />
         <Info />
         <Special />
         <Reviews />
         <Course />
         <Faq />
         <Contact />
         <Footer />
      </>
   )
}

export default Home