import IInput from '../../../types/IInput'

const Input = ({ type, name, setValue, placeholder }: IInput) => {
   const changeInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
      const value = e.target.value;
      setValue(value)
   }

   return (
      <input type={type} name={name} id={name} placeholder={placeholder} onChange={changeInput} className='p-5 text-base text-white border-0 w-full rounded-2xl bg-primary-Light focus:outline-none' />
   )
}

export default Input