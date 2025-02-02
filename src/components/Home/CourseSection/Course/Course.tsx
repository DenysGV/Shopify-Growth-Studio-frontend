import React from 'react'
import CourseTitle from '../CourseTitle/CourseTitle'
import CourseMain from '../CourseMain/CourseMain'
import CourseFilling from '../CourseFilling/CourseFilling'

const Course = () => {
   return (
      <div className=' relative'>
         <div className=' absolute -top-40 left-0 -z-10'>
            <img src="/images/courseBg1.png" alt="glow" />
         </div>
         <div className=' absolute -bottom-40 right-0 -z-10'>
            <img src="/images/courseBg2.png" alt="glow" />
         </div>
         <div className="container flex gap-7 py-24 max-lg:flex-col max-md:py-12">
            <CourseTitle />
            <CourseMain />
            <CourseFilling />
         </div>
      </div>
   )
}

export default Course