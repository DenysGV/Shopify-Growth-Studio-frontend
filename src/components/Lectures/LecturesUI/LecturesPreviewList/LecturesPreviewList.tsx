import { useState } from "react"
import ILecturesPreviewList from "../../../../types/ILecturesPreviewList"
import useNavigation from "../../../../hooks/useNavigation"
import useAppDispatch from "../../../../hooks/useAppDispatch"
import { toggleCompleted } from "../../../../store/Auth/authSlice"
import useAppSelector from "../../../../hooks/useAppSelector"

const LecturesPreviewList = ({ children, id, linkType, completed }: ILecturesPreviewList) => {
   const [active, setActive] = useState<boolean>(completed)
   const [hover, setHover] = useState<boolean>(false)
   const dispatch = useAppDispatch()
   const userId = useAppSelector(state => state.root.auth.user?._id)
   const { moveToPage } = useNavigation()

   const onEnter = () => {
      setHover(true)
   }

   const onLeave = () => {
      setHover(false)
   }

   const buttonClickHandller = () => {
      setActive(prev => (!prev))

      if (userId) {
         dispatch(toggleCompleted({
            userId,
            lesson: {
               lectureId: id,
               title: children,
            }
         }));
      }
   }

   const clickHandler = () => {
      moveToPage(`${linkType}/${id}`)
   }

   return (
      <div className="flex gap-5 w-fit max-sm:flex-col max-sm:gap-3" onMouseEnter={onEnter} onMouseLeave={onLeave}>
         <li className={`text-base marker:text-secondary cursor-pointer ${hover || active ? 'text-secondary' : 'text-white'} max-sm:text-sm`} onClick={() => { clickHandler() }}>
            {children}
         </li>
         <div className={`w-6 h-6 rounded items-center justify-center cursor-pointer flex-shrink-0 ${hover ? 'flex' : 'hidden'} ${!active ? 'bg-secondary' : 'bg-red-500'}`} onClick={() => { buttonClickHandller() }}>
            {!active ? <img src="/images/previewListСheck.svg" alt="check" /> : <img src="/images/previewListCross.svg" alt="cross" />}
         </div>
      </div>
   )
}

export default LecturesPreviewList