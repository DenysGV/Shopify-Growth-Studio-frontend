import React from 'react'
import Button from '../../../Ui/Button/Button'

const CourseMainFooter = () => {
   return (
      <div className='flex justify-between items-end max-lg:pt-24 max-sm:pt-0 max-[425px]:flex-col-reverse max-[425px]:items-start max-[425px]:pt-8'>
         <a href="#contact">
            <Button type='filled' text='записатись' onClick={() => { }} additionalStyles='h-11 items-center flex max-[425px]:mt-6' />
         </a>
         <div>
            <div className='flex items-center gap-2'>
               <div className='text-base p-1 rounded-xl bg-secondary'>-50%</div>
               <div className='text-xl text-white opacity-70 decoration-0 line-through'>28 $</div>
            </div>
            <p className='text-3xl text-white'>$14 <span className='text-sm'>/week</span></p>
         </div>
      </div>
   )
}

export default CourseMainFooter