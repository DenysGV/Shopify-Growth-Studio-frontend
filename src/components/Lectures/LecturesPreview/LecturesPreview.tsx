import LecturePreviewMenu from "../LecturesUI/LecturePreviewMenu/LecturePreviewMenu"
import LecturesPreviewTitle from "../LecturesUI/LecturesPreviewTitle/LecturesPreviewTitle"
import ILecturesPreviewList from "../LecturesUI/LecturesPreviewList/LecturesPreviewList"
import ILecturesPreview from "../../../types/ILecturesPreview"

const LecturesPreview = ({ type }: ILecturesPreview) => {
   return (
      <div>
         <LecturesPreviewTitle index={1} link='./'>
            Введение в дропшиппинг
         </LecturesPreviewTitle>
         <LecturePreviewMenu>
            <ILecturesPreviewList link="/">
               Что такое дропшиппинг и как он работает
            </ILecturesPreviewList>
            <ILecturesPreviewList link="/">
               Что такое дропшиппинг и как он работает
            </ILecturesPreviewList>
            <ILecturesPreviewList link="/">
               Что такое дропшиппинг и как он работает
            </ILecturesPreviewList>
         </LecturePreviewMenu>
         <LecturesPreviewTitle index={1} link='./'>
            Введение в дропшиппинг
         </LecturesPreviewTitle>
         <LecturePreviewMenu>
            <ILecturesPreviewList link="/">
               Что такое дропшиппинг и как он работает
            </ILecturesPreviewList>
            <ILecturesPreviewList link="/">
               Что такое дропшиппинг и как он работает
            </ILecturesPreviewList>
            <ILecturesPreviewList link="/">
               Что такое дропшиппинг и как он работает
            </ILecturesPreviewList>
         </LecturePreviewMenu>
      </div>
   )
}

export default LecturesPreview