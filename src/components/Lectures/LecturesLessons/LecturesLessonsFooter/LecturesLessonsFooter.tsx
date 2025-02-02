import useNavigation from "../../../../hooks/useNavigation";
import ILecturesLessonsFooter from "../../../../types/ILecturesLessonsFooter"
import Button from "../../../Ui/Button/Button"

const LecturesLessonsFooter = ({ id }: ILecturesLessonsFooter) => {
   const { moveToPage } = useNavigation();

   const prevHandler = () => {
      moveToPage(`Lectures/Lessons/${id <= 1 ? 1 : --id}`)
   }
   const nextHandler = () => {
      moveToPage(`Lectures/Lessons/${id <= 0 ? 1 : ++id}`)
   }

   return (
      <div className="flex justify-between ">
         <Button text="< попередня стаття" type="empty" onClick={() => { prevHandler() }} />
         <Button text="наступна стаття >" type="empty" onClick={() => { nextHandler() }} />
      </div>
   )
}

export default LecturesLessonsFooter