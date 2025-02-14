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
      loading: false,
      error: false,
      message: '',
   });

   const { moveToPage } = useNavigation();
   const dispatch = useAppDispatch()

   const sendLogin = async (event: React.FormEvent<HTMLFormElement>) => {
      try {
         event.preventDefault();

         if (result.loading) {
            return
         }

         setResult(prev => ({ ...prev, loading: true }))
         event.currentTarget.reset()

         const response = await axios.post('https://shopify-growth-studio-backend.onrender.com/login', { email, password }, { headers: { 'Content-Type': 'application/json' } });

         if (!response.data.error) {
            dispatch(login(response.data.userInfo))
            moveToPage('Lectures')
         }
      } catch (error: any) {
         if (error.response.data.message) {
            setResult({ loading: false, error: true, message: `${error.response.data.message}` });
         } else {
            setResult({ loading: false, error: true, message: 'Щось пішло не так, спробуйте ще раз' });
         }
      }
   }

   return (
      <form className="flex flex-col gap-5 items-center" onSubmit={sendLogin}>
         <Input type="email" name="email" setValue={setEmail} placeholder="E-MAIL" />
         <Input type="password" name="password" setValue={setPassword} placeholder="Пароль" />
         <p className={`text-sm text-center text-red-500 ${result.error ? 'block' : 'hidden'}`}>{result.message}</p>
         <Button type="filled" text="увійти" onClick={() => { }} />
      </form>
   )
}

export default LoginForm