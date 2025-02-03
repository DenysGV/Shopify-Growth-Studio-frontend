import useAppSelector from "../../../hooks/useAppSelector";
import ILecturesPreviewMenu from "../LecturesUI/LecturePreviewMenu/LecturePreviewMenu"
import LecturesPreviewList from "../LecturesUI/LecturesPreviewList/LecturesPreviewList";

const LecturesLessons = () => {
   const lessons = useAppSelector((state) => state.root.lessons.items);
   const user = useAppSelector((state) => state.root.auth.user);

   return (
      <div className='w-10/12 m-4 bg-primary rounded-2xl p-7 max-lg:w-full max-sm:p-2.5 max-sm:m-2'>
         <ILecturesPreviewMenu>
            {[...lessons].sort((a, b) => a.id - b.id).map(item => {
               // Проверяем, был ли урок выполнен
               const isCompleted = user?.lecturesCompleted.lessons.some(
                  (completedItem) => completedItem.lectureId === item.id
               );

               return (
                  <LecturesPreviewList key={item.id} id={item.id} linkType="lessons" completed={isCompleted ? isCompleted : false}>
                     {item.title}
                  </LecturesPreviewList>
               );
            })}
         </ILecturesPreviewMenu>
      </div>
   )
}

export default LecturesLessons