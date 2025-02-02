import useAppSelector from "../../../../hooks/useAppSelector";

const LecturesOverviewHeader = () => {
   const auth = useAppSelector((state) => state.root.auth);

   return (
      <div className="mb-5 bg-primary-Light rounded-2xl py-2.5 px-5 flex justify-between items-center max-sm:mb-1.5 max-sm:py-4">
         <div className="max-sm:inline-block">
            <h3 className="text-2xl text-white max-sm:text-lg">Привет <span className="text-secondary">{auth.user?.fullName.split(' ')[0]}</span> !</h3>
            <p className="text-xl pt-4 text-white opacity-80 max-sm:text-base">раді знову тебе бачити тут</p>
         </div>
         <div className="max-sm:hidden">
            <img src="/images/overviewHuman.png" alt="Hello" />
         </div>
      </div>
   )
}

export default LecturesOverviewHeader