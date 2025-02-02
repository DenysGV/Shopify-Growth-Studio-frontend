import React from 'react'
import Title from '../../../Ui/Title/Title'
import FaqItem from '../FaqItem/FaqItem'
import IFaqItem from '../../../../types/IFaqItem'

const Faq = () => {
   const faqArr: IFaqItem[] = [
      {
         head: 'Я новачок - чи підійде мені навчання?',
         body: 'Так! Курс розповідає все від А до Я. Ми надамо вам всі необхідні знання. І наші куратори завжди зможуть відповісти на всі твої запитання.',
      },
      {
         head: 'Чого можна досягти після нашого навчання дропшипінгу?',
         body: 'Наші дропшипінг курси – це передача досвіду і практичних лайфхаків. Також ви дізнаєтеся про підводні камені та можливі ризики у сфері електронної комерції.',
      },
      {
         head: 'Як почати дропшипінг-бізнес?',
         body: 'Щоб розпочати дропшипінг-бізнес, потрібно небагато – основною складовою є створення інтернет-магазину на одній з відомих платформ, який потрібно буде наповнити товаром та забезпечувати його просування для активного продажу. Shopify Growth Studio дасть вам всі необхідні знання, здобуті багаторічним досвідом, допоможе відкрити інтернет магазин на Shopify та отримати прибуток.',
      },
      {
         head: 'Скільки часу потрібно, щоб почати дропшипінг-бізнес?',
         body: 'Не варто чекати великого прибутку за короткий проміжок часу. Щоб дропшипінг перетворився на успішний бізнес, варто докласти чимало зусиль. Але досягти хороших результатів та вийти на прибуток цілком реально навіть у перший місяць роботи. А курс з відкриття бізнесу дропшипінг вам у цьому допоможе.',
      },
      {
         head: 'Скільки грошей потрібно, щоб розпочати бізнес по дропшипінгу?',
         body: 'Для впевненого старту, щоб  вийти на значні обороти в найкоротший час, достатньо буде на початковому етапі вкласти суму в $1,000-$1,500. Цієї суми достатньо для тестування кількох продуктів. Але цілком реально починати і з меншої суми, особливо якщо націлюватись першочергово на навчання. Торгівля в інтернеті приваблює все більше людей. Адже зараз власну справу можна розпочати навіть без вкладень.',
      },
   ]

   return (
      <div id='faq'>
         <div className=' relative'>
            <div className=' absolute -bottom-12 left-5 -z-10'>
               <img src="/images/faqBg1.png" alt="glow" />
            </div>
            <div className="container py-24">
               <Title width='w-9/12' glow={true}>
                  Поширені <span className='text-secondary'>питання</span>
               </Title>
               <div className='pt-12 max-md:pt-5'>
                  {faqArr.map(item => (
                     <FaqItem {...item} key={item.head} />
                  ))}
               </div>
            </div>
         </div>
      </div>
   )
}

export default Faq