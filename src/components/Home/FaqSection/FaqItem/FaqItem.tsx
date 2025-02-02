import { useState } from 'react'
import IFaqItem from '../../../../types/IFaqItem'

const FaqItem = ({ head, body }: IFaqItem) => {
   const [collapseActive, setCollapseActive] = useState<boolean>(false)

   const toggleCollapse = () => {
      setCollapseActive(prev => !prev)
   }

   return (
      <div className='py-4 pr-8 pl-5 bg-primary-Light rounded-2xl mt-6 max-sm:pr-4 max-sm:mt-3 cursor-pointer' onClick={toggleCollapse}>
         <div className='flex justify-between gap-4'>
            <h3 className='text-2xl text-white max-sm:text-sm'>{head}</h3>
            <img
               src="/images/faqCross.svg"
               alt="cross"
               className={`transition-transform duration-500 ${collapseActive ? 'rotate-45' : 'rotate-0'}`}
            />
         </div>
         <div
            className={`transition-[max-height] duration-500 overflow-hidden`}
            style={{ maxHeight: collapseActive ? '500px' : '0px' }}
         >
            <p className="text-base opacity-80 pt-10 text-white max-sm:text-xs">{body}</p>
         </div>
      </div>
   )
}

export default FaqItem