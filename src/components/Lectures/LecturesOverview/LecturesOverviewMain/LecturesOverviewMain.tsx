import useAppSelector from "../../../../hooks/useAppSelector";
import IStatsItem from "../../../../types/IStatsItem"
import LecturesOverviewMainLatest from "../LecturesOverviewMainLatest/LecturesOverviewMainLatest"
import LecturesOverviewMainStatsItems from "../LecturesOverviewMainStatsItems/LecturesOverviewMainStatsItems"

const LecturesOverviewMain = () => {
   const root = useAppSelector((state) => state.root);
   const completed = root.auth.user?.lecturesCompleted.lessons.length ? root.auth.user?.lecturesCompleted.lessons.length : 0

   const statsItemsArr: IStatsItem[] = [
      {
         text: 'Годин проведено на сайті',
         num: root.auth.user?.totalTimeSpent ? +root.auth.user?.totalTimeSpent.toFixed(1) : 0,
      },
      {
         text: 'Усього уроків',
         num: root.lessons.items.length,
      },
      {
         text: 'Пройдено уроків',
         num: completed,
      },
      {
         text: 'Залишилось пройти уроків',
         num: root.lessons.items.length - completed,
      },
   ]


   return (
      <div className="grid grid-cols-4 grid-rows-2 gap-5 max-lg:grid-cols-2 max-lg:grid-rows-4 max-sm:grid-cols-1 max-sm:grid-rows-6 max-sm:gap-1.5">
         <LecturesOverviewMainLatest />
         {statsItemsArr.map((item) => (
            <LecturesOverviewMainStatsItems {...item} />
         ))}
      </div>
   )
}

export default LecturesOverviewMain