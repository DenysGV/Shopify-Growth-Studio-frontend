import React from 'react'
import IInfoItem from '../../../../types/IInfoItem'

const InfoItem = ({ text, index }: IInfoItem) => {
   return (
      <div className='flex items-center'>
         <div className='py-2 px-2.5 w-12 bg-secondary rounded-l-lg text-xl'>0{index}</div>
         <p className='px-4 py-3 bg-primary-Light text-md text-white rounded-lg w-full max-sm:text-xs'>{text}</p>
      </div>
   )
}

export default InfoItem