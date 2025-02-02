import IUser from "./IUser";

export default interface IAuthState {
   isAuth: boolean;
   user: IUser | null; // Данные о пользователе
}