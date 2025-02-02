import LecturesOverviewHeader from "./LecturesOverviewHeader/LecturesOverviewHeader"
import LecturesOverviewMain from "./LecturesOverviewMain/LecturesOverviewMain"

const LecturesOverview = () => {
   return (
      <div className='w-10/12 m-4 bg-primary rounded-2xl p-7 max-lg:w-full max-sm:p-2.5 max-sm:m-2'>
         <LecturesOverviewHeader />
         <LecturesOverviewMain />
      </div>
   )
}

export default LecturesOverview