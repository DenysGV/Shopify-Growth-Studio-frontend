import ILecturesPreviewTitle from "../../../../types/ILecturesPreviewTitle"

const LecturesPreviewTitle = ({ children, link, index }: ILecturesPreviewTitle) => {
   return (
      <h3 className="text-2xl text-white pb-4 max-sm:text-lg">
         {index}. {children}
      </h3>
   )
}

export default LecturesPreviewTitle