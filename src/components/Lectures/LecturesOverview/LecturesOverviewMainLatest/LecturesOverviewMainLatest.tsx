import useAppSelector from "../../../../hooks/useAppSelector";
import LecturesOverviewMainLatestItem from "../LecturesOverviewMainLatestItem/LecturesOverviewMainLatestItem"

const LecturesOverviewMainLatest = () => {
   const latestItems = useAppSelector((state) => state.root.auth.user?.lecturesCompleted.lessons);

   return (
      <div className="col-start-1 col-end-3 row-start-1 row-end-3 bg-primary-Light rounded-2xl py-6 px-5 max-sm:p-4 max-sm:col-end-2">
         <h3 className="text-2xl text-white max-sm:text-base">остання активність</h3>
         <div className="flex flex-col gap-6 mt-7">
            {
               latestItems ?
                  latestItems.length > 0 ?
                     [...latestItems].sort((a, b) => a.lectureId + b.lectureId).map((item, index) => (index < 4 && <LecturesOverviewMainLatestItem {...item} />)) :
                     <p className="text-lg text-white max-sm:text-sm opacity-80">У вас немає поки що ніякої активності</p>
                  :
                  <p className="text-lg text-red-500 max-sm:text-sm">Щось пішло не так</p>
            }
         </div>
      </div>
   )
}

export default LecturesOverviewMainLatest