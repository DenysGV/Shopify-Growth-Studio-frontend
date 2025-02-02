import useAppDispatch from "../../../hooks/useAppDispatch";
import useNavigation from "../../../hooks/useNavigation";
import { logout } from "../../../store/Auth/authSlice";
import LecturesSidebarMenu from "../LecturesSidebarMenu/LecturesSidebarMenu"

const LecturesSidebar = () => {
   const { moveToPage } = useNavigation();
   const dispatch = useAppDispatch()

   const exitHandler = (): void => {
      dispatch(logout())
      moveToPage('')
   }

   return (
      <div className="w-2/12 py-6 pl-6 flex flex-col justify-between max-lg:pl-0 max-lg:w-fit max-lg:py-8 max-sm:pl-4">
         <div>
            <div className="mb-12 cursor-pointer max-lg:hidden"><img src="/images/logo.png" alt="logo" onClick={() => { moveToPage('') }} /></div>
            <LecturesSidebarMenu />
         </div>
         <div className="flex gap-2.5 opacity-80 cursor-pointer mt-auto" onClick={exitHandler}>
            <img src="/images/exitIcon.svg" alt="exitIcon" className="max-lg:w-10" />
            <p className="text-xs text-white max-lg:hidden">вийти</p>
         </div>
      </div>
   )
}

export default LecturesSidebar