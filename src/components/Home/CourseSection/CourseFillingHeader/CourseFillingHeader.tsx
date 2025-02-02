const CourseFillingHeader = () => {
   return (
      <div className='flex justify-between'>
         <h3 className='text-4xl text-white'>Що<br />входить <span className='text-secondary'>?</span></h3>
         <div className='max-[425px]:hidden'>
            <img src="/images/courseStar.png" alt="star" />
         </div>
      </div>
   )
}

export default CourseFillingHeader