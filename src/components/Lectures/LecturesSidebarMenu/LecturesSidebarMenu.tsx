import ILecturesSidebarMenuItem from "../../../types/ILecturesSidebarMenuItem"
import LecturesSidebarMenuItem from "../LecturesSidebarMenuItem/LecturesSidebarMenuItem"

const LecturesSidebarMenu = () => {
   const menuArr: ILecturesSidebarMenuItem[] = [
      {
         text: 'Огляд',
         link: 'Lectures',
         id: 1,
      },
      {
         text: 'Уроки',
         link: 'lessons',
         id: 2,
      },
   ]

   return (
      <ul>
         {menuArr.map(item => (
            <LecturesSidebarMenuItem {...item} key={item.link} />
         ))}
      </ul>
   )
}

export default LecturesSidebarMenu