import { useEffect } from "react";
import Footer from "../components/Footer/Footer"
import LecturesLessons from "../components/Lectures/LecturesLessons/LecturesLessons"
import LecturesSidebar from "../components/Lectures/LecturesSidebar/LecturesSidebar"
import useAppSelector from "../hooks/useAppSelector";
import useNavigation from "../hooks/useNavigation";
import useTimeOnSite from "../hooks/useTimeOnSite";

const Lessons = () => {
   const { moveToPage } = useNavigation();
   const auth = useAppSelector((state) => state.root.auth);

   if (auth.user?._id) {
      useTimeOnSite(auth.user?._id)
   }

   useEffect(() => {
      if (!auth.isAuth) {
         moveToPage('')
      }
   }, [])


   return (
      <div className="flex flex-col min-h-screen relative">
         <div className='absolute top-0 left-0 -z-10 max-sm:hidden'>
            <img src="/images/lecturesBg1.png" alt="Glow" />
         </div>
         <div className='absolute bottom-0 right-0 -z-10 max-sm:bottom-28'>
            <img src="/images/lecturesBg2.png" alt="Glow" />
         </div>
         <div className="container my-24 flex-grow flex bg-primary-Light rounded-2xl gap-6 max-xl:my-3 max-lg:rounded-none max-lg:mt-0 max-sm:p-0 max-sm:gap-4">
            <LecturesSidebar />
            <LecturesLessons />
         </div>
         <Footer />
      </div>
   )
}

export default Lessons