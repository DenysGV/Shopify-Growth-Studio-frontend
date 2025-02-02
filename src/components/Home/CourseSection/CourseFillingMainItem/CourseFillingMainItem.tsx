import React from 'react'
import ICourseMainListItem from '../../../../types/ICourseMainListItem'

const CourseFillingMainItem = ({ text }: ICourseMainListItem) => {
   return (
      <li className='text-sm text-white mt-2  marker:text-secondary'>
         {text}
      </li>
   )
}

export default CourseFillingMainItem