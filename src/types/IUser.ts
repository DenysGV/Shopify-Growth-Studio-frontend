export interface ILectureCompleted {
   lectureId: number;
   title: string;
}

export interface ILectureCompletedTypes {
   lessons: ILectureCompleted[],
   homeworks: ILectureCompleted[],
}

export default interface IUser {
   _id?: string; // Уникальный ID из MongoDB
   fullName: string; // Имя пользователя
   email: string; // Email пользователя
   password: string; // Пароль
   phone?: string; // Телефон (опционально)
   tgUserName?: string; // Ник в Telegram (опционально)
   totalTimeSpent: number, // Потрачено время на сайте
   lecturesCompleted: ILectureCompletedTypes; // Завершённые лекции
   createdAt?: Date; // Дата создания записи
   updatedAt?: Date; // Дата последнего обновления записи
}