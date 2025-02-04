import { useEffect, useState } from "react";
import useAppDispatch from "../../../hooks/useAppDispatch";
import useAppSelector from "../../../hooks/useAppSelector";
import ILecturesPreviewMenu from "../LecturesUI/LecturePreviewMenu/LecturePreviewMenu"
import LecturesPreviewList from "../LecturesUI/LecturesPreviewList/LecturesPreviewList";
import { fetchArticles } from "../../../store/Lessons/lessonsSlice";

const LecturesLessons = () => {
   const lessons = useAppSelector((state) => state.root.lessons.items);
   const user = useAppSelector((state) => state.root.auth.user);
   const [loading, setLoading] = useState<boolean>(true)
   const dispatch = useAppDispatch()

   useEffect(() => {

      if (!lessons.length) {
         dispatch(fetchArticles())
      }

      setLoading(false)
   }, [])

   return (
      <div className='w-10/12 m-4 bg-primary rounded-2xl p-7 max-lg:w-full max-sm:p-2.5 max-sm:m-2'>
         {
            loading
               ?
               <div className="w-20 h-20 rounded-full animate-spin mx-auto border-2 border-secondary border-dashed text-white "></div>
               :
               <ILecturesPreviewMenu>
                  {[...lessons].sort((a, b) => a.id - b.id).map(item => {
                     // Проверяем, был ли урок выполнен
                     const isCompleted = user?.lecturesCompleted.lessons.some(
                        (completedItem) => completedItem.lectureId === item.id
                     );

                     return (
                        <LecturesPreviewList key={item.id} id={item.id} completed={isCompleted ? isCompleted : false}>
                           {item.title}
                        </LecturesPreviewList>
                     );
                  })}
               </ILecturesPreviewMenu>
         }

      </div>
   )
}

export default LecturesLessons