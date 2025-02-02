import ILectureTitle from "../../../../types/ILectureTitle"

const LectureTitle = ({ children, lvl }: ILectureTitle) => {
   if (lvl == 1) {
      return (
         <h1 className="text-2xl text-white pb-10 max-sm:text-lg">
            {children}
         </h1>
      )
   } else if (lvl == 2) {
      return (
         <h2 className="text-2xl text-white pb-10 max-sm:text-lg">
            {children}
         </h2>
      )
   }

}

export default LectureTitle