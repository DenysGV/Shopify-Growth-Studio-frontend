import useNavigation from "../../../../hooks/useNavigation"
import ILatestItem from "../../../../types/ILatestItem"

const LecturesOverviewMainLatestItem = ({ title, lectureId }: ILatestItem) => {
   const { moveToPage } = useNavigation()

   const clickHandler = () => {
      moveToPage(`lessons/${lectureId}`)
   }

   return (
      <div className="flex gap-2.5 max-sm:items-center cursor-pointer" onClick={() => { clickHandler() }}>
         <div className="bg-secondary rounded-2xl flex justify-center items-center w-14 h-14 text-4xl font-medium flex-shrink-0 max-sm:w-10 max-sm:h-10 max-sm:text-2xl">
            {title[0]}
         </div>
         <p className="text-white text-base max-sm:text-sm">{title}</p>
      </div>
   )
}

export default LecturesOverviewMainLatestItem