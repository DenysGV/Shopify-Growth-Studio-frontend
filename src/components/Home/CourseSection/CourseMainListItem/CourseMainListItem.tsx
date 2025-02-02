import React from 'react'
import ICourseMainListItem from '../../../../types/ICourseMainListItem'

const CourseMainListItem = ({ text }: ICourseMainListItem) => {
   return (
      <li className='text-base text-white pt-2 marker:text-secondary'>
         {text}
      </li>
   )
}

export default CourseMainListItem