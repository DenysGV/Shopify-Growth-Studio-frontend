import ILesson from "./ILesson";

export default interface ILectureContentData {
   loading: boolean,
   error: boolean,
   lesson: ILesson | null,
}