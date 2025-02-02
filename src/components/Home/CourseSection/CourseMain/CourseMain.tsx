import CourseMainList from '../CourseMainList/CourseMainList'
import CourseMainFooter from '../CourseMainFooter/CourseMainFooter'

const CourseMain = () => {
   return (
      <div className='bg-primary-Light p-6 flex flex-col justify-between w-5/12 rounded-2xl relative max-lg:w-full max-sm:p-3'>
         <div className=''>
            <h5 className='text-white text-sm border-b-2 border-secondary pb-1 w-fit'>Курс по shopify</h5>
         </div>
         <div><img src="/images/courseBag.png" alt="Bag" className='absolute -top-2 right-0 max-sm:hidden' /></div>
         <div>
            <h4 className='text-2xl text-white pb-4'>дропшипинг з 0 до <span className='text-secondary'>1000$</span></h4>
            <CourseMainList />
            <CourseMainFooter />
         </div>
      </div>
   )
}

export default CourseMain