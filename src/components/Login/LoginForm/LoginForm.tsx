import { useState } from 'react'
import Input from '../../Ui/Input/Input'
import Button from '../../Ui/Button/Button'
import axios from 'axios'
import { login } from '../../../store/Auth/authSlice'
import ILoginResult from '../../../types/ILoginResult'
import useAppDispatch from '../../../hooks/useAppDispatch'
import useNavigation from '../../../hooks/useNavigation'

const LoginForm = () => {
   const [password, setPassword] = useState<string>('')
   const [email, setEmail] = useState<string>('')
   const [result, setResult] = useState<ILoginResult>({
      error: false,
      message: '',
   })

   const { moveToPage } = useNavigation();
   const dispatch = useAppDispatch()

   const sendLogin = async () => {
      try {
         const response = await axios.post('http://localhost:8000/login', { email, password }, { headers: { 'Content-Type': 'application/json' } });

         if (!response.data.error) {
            dispatch(login(response.data.userInfo))
            moveToPage('Lectures')
         }
      } catch (error: any) {
         if (error.response.data.message) {
            setResult({ error: true, message: `${error.response.data.message}` });
         } else {
            setResult({ error: true, message: 'Щось пішло не так, спробуйте ще раз' });
         }
      }
   }

   return (
      <form className="flex flex-col gap-5 items-center" onSubmit={(e) => e.preventDefault()}>
         <Input type="email" name="email" setValue={setEmail} placeholder="E-MAIL" />
         <Input type="password" name="password" setValue={setPassword} placeholder="Пароль" />
         <p className={`text-sm text-center text-red-500 ${result.error ? 'block' : 'hidden'}`}>{result.message}</p>
         <Button type="filled" text="увійти" onClick={() => { sendLogin() }} />
      </form>
   )
}

export default LoginForm