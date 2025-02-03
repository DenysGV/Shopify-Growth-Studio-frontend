import ILectureTitle from "../../../../types/ILectureTitle"

const LectureTitle = ({ children }: ILectureTitle) => {
   return (
      <h1 className="text-2xl text-white pb-10 max-sm:text-lg">
         {children}
      </h1>
   )
}

export default LectureTitle