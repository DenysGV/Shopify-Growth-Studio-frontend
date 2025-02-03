import ParagraphArticle from "../components/Article/ParagraphArticle/ParagraphArticle"
import SubtitleArticle from "../components/Article/SubtitleArticle/SubtitleArticle"
import TitleArticle from "../components/Article/TitleArticle.tsx/TitleArticle"
import Footer from "../components/Footer/Footer"
import Navbar from "../components/Navbar/Navbar"

const Garantee = () => {
   return (
      <div className="flex flex-col min-h-screen relative">
         <div className='absolute top-0 left-0 -z-10 max-sm:hidden'>
            <img src="/images/lecturesBg1.png" alt="Glow" />
         </div>
         <div className='absolute bottom-0 right-0 -z-10 max-sm:bottom-28'>
            <img src="/images/lecturesBg2.png" alt="Glow" />
         </div>
         <Navbar />
         <div className="container py-24 flex-grow max-sm:py-12">
            <TitleArticle>
               Гарантія повернення
            </TitleArticle>
            <ParagraphArticle>
               Ми гарантуємо повне повернення коштів за придбаний на сайті shopify-growth-studio.com інформаційний продукт/послугу.
            </ParagraphArticle>
            <SubtitleArticle>
               Тривалість гарантії
            </SubtitleArticle>
            <ParagraphArticle>
               Майстер-класи: 1 день з моменту отримання доступу до події.
            </ParagraphArticle>
            <ParagraphArticle>
               Якщо ви пройшли більше одного модуля курса — гарантія повернення відсутня
            </ParagraphArticle>
         </div>
         <Footer />
      </div>
   )
}

export default Garantee