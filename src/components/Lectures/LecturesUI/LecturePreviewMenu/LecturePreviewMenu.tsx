import ILecturesPreviewMenu from "../../../../types/ILecturePreviewMenu"

const LecturePreviewMenu = ({ children }: ILecturesPreviewMenu) => {
   return (
      <ul className="flex flex-col gap-5 list-disc ml-8 mb-6 max-sm:ml-4">
         {children}
      </ul>
   )
}

export default LecturePreviewMenu