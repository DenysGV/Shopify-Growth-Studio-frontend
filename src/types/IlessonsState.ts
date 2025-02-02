import ILesson from "./ILesson";

export default interface IlessonsState {
   items: ILesson[],
   status: 'idle' | 'loading' | 'succeeded' | 'failed', // idle | loading | succeeded | failed
   error: null | string,
}