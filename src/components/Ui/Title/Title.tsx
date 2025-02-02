import React from 'react'
import ITitle from '../../../types/ITitle'

const Title = ({ children, width, glow, align }: ITitle) => {
   return (
      <div className='relative'>
         <h2 className={`text-6xl ${width} text-white mx-auto font-medium max-sm:text-2xl relative max-lg:text-center text-${align ? align : 'center'}`}>
            {children}
         </h2>
         {glow && <img src="/images/titleGlow.png" className='absolute -bottom-56 right-28 -z-10 max-lg:right-0 max-md:-bottom-28 max-[425px]:-bottom-14' />}
      </div>
   )
}

export default Title