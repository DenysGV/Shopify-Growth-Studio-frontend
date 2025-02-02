import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import LoginMain from '../components/Login/LoginMain/LoginMain'

const Login = () => {
   return (
      <div className="flex flex-col min-h-screen relative">
         <div className='absolute top-0 left-0 -z-10 max-sm:hidden'>
            <img src="/images/lecturesBg1.png" alt="Glow" />
         </div>
         <div className='absolute bottom-0 right-0 -z-10 max-sm:bottom-28'>
            <img src="/images/lecturesBg2.png" alt="Glow" />
         </div>
         <Navbar />
         <LoginMain />
         <Footer />
      </div>
   )
}

export default Login