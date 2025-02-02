import useNavigation from "../../../hooks/useNavigation";
import ILecturesSidebarMenuItem from "../../../types/ILecturesSidebarMenuItem"

const LecturesSidebarMenuItem = ({ text, link, id }: ILecturesSidebarMenuItem) => {
   const { moveToPage } = useNavigation();

   return (
      <li className="flex gap-2 text-base text-white mb-5 flex-grow cursor-pointer" onClick={() => { moveToPage(link) }}>
         <img className="max-lg:w-10" src={`/images/sidebarIcon${id}.svg`} alt="" />
         <p className="max-lg:hidden">{text}</p>
      </li>
   )
}

export default LecturesSidebarMenuItem