import Title from '../../../Ui/Title/Title'
import ReviewsItem from '../ReviewsItem/ReviewsItem'

const Reviews = () => {
   const reviewsArr = [1, 2, 3, 4, 5, 6, 7, 8]

   return (
      <div id='reviews'>
         <div className=' relative'>
            <div className=' absolute top-20 left-0 -z-10'>
               <img src="/images/reviewBg1.png" alt="glow" />
            </div>
            <div className=' absolute top-1/3 right-0 -z-10 max-md:hidden'>
               <img src="/images/reviewBg2.png" alt="glow" />
            </div>
            <div className="container py-24 max-sm:py-10">
               <Title width='w-9/12' glow={true}>
                  <span className='text-secondary'>відгуки</span> наших студентів
               </Title>
               <div className='grid grid-cols-4 gap-7 pt-12 justify-center max-md:gap-4 max-md:grid-cols-2'>
                  {reviewsArr.map(item => (
                     <ReviewsItem index={item} key={item} />
                  ))}
               </div>
            </div>
         </div>
      </div>
   )
}

export default Reviews