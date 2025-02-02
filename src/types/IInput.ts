export default interface IInput {
   type: 'email' | 'text' | 'tel' | 'password',
   name: string,
   setValue: React.Dispatch<React.SetStateAction<string>>,
   placeholder: string,
}