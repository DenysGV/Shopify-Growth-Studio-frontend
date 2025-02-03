import CourseMainListItem from '../CourseMainListItem/CourseMainListItem'
import ICourseMainListItem from '../../../../types/ICourseMainListItem'

const CourseMainList = () => {
   const listArr: ICourseMainListItem[] = [
      {
         text: 'практичні завдання',
      },
      {
         text: 'high-conversion магазин',
      },
      {
         text: 'winner product формула',
      },
   ]

   return (
      <ul className='list-disc ml-4'>
         {listArr.map(item => (
            <CourseMainListItem {...item} key={item.text} />
         ))}
      </ul>
   )
}

export default CourseMainList