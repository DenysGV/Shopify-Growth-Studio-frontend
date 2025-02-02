import IReviewsItem from '../../../../types/IReviewsItem'

const ReviewsItem = ({ index }: IReviewsItem) => {
   return (
      <div className={index % 2 == 0 ? 'max-lg:hidden' : ''}>
         <img src={`/images/reviewsImage (${index}).png`} alt="reviewsImage" className='w-full' />
      </div>
   )
}

export default ReviewsItem