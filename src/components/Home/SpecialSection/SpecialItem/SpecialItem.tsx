import ISpecialItem from '../../../../types/ISpecialItem'

const SpecialItem = ({ title, paragraph, index }: ISpecialItem) => {
   return (
      <div className='py-7 px-5 relative border-secondary rounded-2xl border-2 w-4/12 max-lg:w-full'>
         <div className='text-3xl text-secondary absolute -top-5 left-8 bg-primary'>[ 0{index} ]</div>
         <h3 className='text-lg pb-4 text-white max-sm:text-base'>{title}</h3>
         <p className='text-sm text-white opacity-80 max-sm:text-sm'>{paragraph}</p>
      </div>
   )
}

export default SpecialItem