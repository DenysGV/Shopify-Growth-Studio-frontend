import IArticleItem from '../../../types/IArticleItem'

const TitleArticle = ({ children }: IArticleItem) => {
   return (
      <h1 className='text-6xl text-white max-md:text-2xl font-semibold'>
         {children}
      </h1>
   )
}

export default TitleArticle