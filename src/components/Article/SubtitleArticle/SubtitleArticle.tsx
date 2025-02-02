import React from 'react'
import IArticleItem from '../../../types/IArticleItem'

const SubtitleArticle = ({ children }: IArticleItem) => {
   return (
      <h3 className='text-2xl text-white pt-10 max-md:text-base font-semibold'>
         {children}
      </h3>
   )
}

export default SubtitleArticle