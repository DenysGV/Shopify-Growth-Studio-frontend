import IStatsItem from "../../../../types/IStatsItem"

const LecturesOverviewMainStatsItems = ({ text, num }: IStatsItem) => {
   return (
      <div className="p-4 bg-primary-Light rounded-2xl">
         <p className="text-6xl text-secondary text-center pt-2">{num}</p>
         <p className="text-base text-white text-center pt-3">{text}</p>
      </div>
   )
}

export default LecturesOverviewMainStatsItems