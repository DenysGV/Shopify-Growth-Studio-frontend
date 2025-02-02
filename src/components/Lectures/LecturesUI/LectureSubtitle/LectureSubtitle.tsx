import ILectureSubtitle from "../../../../types/ILectureSubtitle"

const LecturesSubtitle = ({ children }: ILectureSubtitle) => {
   return (
      <h3 className="text-lg text-white py-2 max-sm:text-base">
         {children}
      </h3>
   )
}

export default LecturesSubtitle