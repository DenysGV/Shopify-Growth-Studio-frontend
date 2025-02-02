import React from 'react'
import CourseFillingHeader from '../CourseFillingHeader/CourseFillingHeader'
import CourseFillingMain from '../CourseFillingMain/CourseFillingMain'

const CourseFilling = () => {
   return (
      <div className='w-5/12 bg-primary-Light p-6 rounded-2xl max-lg:w-full max-sm:p-3'>
         <CourseFillingHeader />
         <CourseFillingMain />
      </div>
   )
}

export default CourseFilling