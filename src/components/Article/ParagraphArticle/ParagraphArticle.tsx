import IArticleItem from '../../../types/IArticleItem'

const ParagraphArticle = ({ children }: IArticleItem) => {
   return (
      <p className='text-lg text-white pt-5 opacity-80 max-md:text-xs'>
         {children}
      </p>
   )
}

export default ParagraphArticle