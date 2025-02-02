import ILecturesList from "../../../../types/ILectureList"

const ILecturesItem = ({ children }: ILecturesList) => {
   return (
      <li className={`text-sm normal-case marker:text-secondary text-white opacity-80`}>
         {children}
      </li>
   )
}

export default ILecturesItem