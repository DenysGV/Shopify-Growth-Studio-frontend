import Title from '../../../Ui/Title/Title'
import SpecialItem from '../SpecialItem/SpecialItem'
import ISpecialItem from '../../../../types/ISpecialItem'

const Special = () => {
   const specialArr: ISpecialItem[] = [
      {
         title: 'Новачок або початківець без досвіду',
         paragraph: 'Навчись створювати власний міжнародний інтернет магазин на Shopify та почни заробляти в доларах',
         index: 1,
      },
      {
         title: 'Підприємець початківець',
         paragraph: 'Створи свій перший міжнародний інтернет-магазин, додай гарячі продукти, запусти рекламу та отримай перший дохід',
         index: 2,
      },
      {
         title: 'Підприємець в сфері товарного бізнесу',
         paragraph: 'Кратно збільши свій дохід, запустивши продажі власних продуктів на міжнародних ринках (США, Канади, Австраліі та країнах Європи)',
         index: 3,
      },
   ]

   return (
      <div>
         <div className=' relative'>
            <div className=' absolute -top-20 right-0 -z-10 max-md:top-20'>
               <img src="/images/specialBg1.png" alt="glow" />
            </div>
            <div className="container py-24 max-sm:py-10">
               <Title width='w-9/12' glow={false}>
                  цей курс точно для <span className='text-secondary'>тебе</span>, якщо ти
               </Title>
               <div className='flex gap-7 pt-16 max-lg:flex-col'>
                  {
                     specialArr.map(item => (
                        <SpecialItem {...item} key={item.index} />
                     ))
                  }
               </div>
            </div>
         </div>
      </div>
   )
}

export default Special