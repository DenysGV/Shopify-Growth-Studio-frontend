import ICourseMainListItem from '../../../../types/ICourseMainListItem'
import CourseFillingMainItem from '../CourseFillingMainItem/CourseFillingMainItem'

const CourseFillingMain = () => {
   const listArr: ICourseMainListItem[] = [
      {
         text: 'Введение в дропшиппинг',
      },
      {
         text: 'Анализ конкурентов',
      },
      {
         text: 'Выбор ниши: как найти прибыльную и востребованную нишу',
      },
      {
         text: 'Выбор продукта по 20 пунктам + табличка',
      },
      {
         text: 'Настройка Shopify-магазина',
      },
      {
         text: 'Логистика и работа с поставщиками',
      },
      {
         text: 'Маркетинг и привлечение трафика',
      },
      {
         text: 'Алгоритмы Facebook',
      },
      {
         text: 'Работа с клиентами',
      },
      {
         text: 'Масштабирование бизнеса',
      },
   ]

   return (
      <ul className='pt-7 pl-4 list-disc'>
         {listArr.map(item => (
            <CourseFillingMainItem {...item} key={item.text} />
         ))}
      </ul>
   )
}

export default CourseFillingMain