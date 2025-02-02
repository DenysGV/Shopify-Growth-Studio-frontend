import ILectureSubtitle from "../../../../types/ILectureSubtitle"

const LectureParagraph = ({ children }: ILectureSubtitle) => {
   return (
      <p className="text-base text-white pb-5 opacity-80 max-sm:text-sm normal-case">
         {children}
      </p>
   )
}

export default LectureParagraph