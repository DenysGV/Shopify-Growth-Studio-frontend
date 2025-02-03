import { useState } from 'react'
import Input from '../../../Ui/Input/Input'
import Button from '../../../Ui/Button/Button'
import axios from 'axios'
import ILoginResult from '../../../../types/ILoginResult'
import { fbq } from 'react-facebook-pixel'

const ContactForm = () => {
   const [name, setName] = useState<string>('')
   const [phone, setPhone] = useState<string>('')
   const [email, setEmail] = useState<string>('')
   const [tgName, settgName] = useState<string>('')
   const [result, setResult] = useState<ILoginResult>({
      loading: false,
      error: false,
      message: '',
   });

   const handleSubmit = async (event: React.FormEvent) => {
      event.preventDefault(); // Останавливаем перезагрузку страницы

      if (result.loading) {
         return
      }

      setResult(prev => ({ ...prev, loading: true }))

      try {
         const response = await axios.post('https://shopify-growth-studio-backend.onrender.com/send-message', { name, phone, email, tgName }, { headers: { 'Content-Type': 'application/json' } })

         if (!response.data.error) {
            fbq('track', 'Lead');
            setResult({
               loading: false,
               error: false,
               message: response.data.message,
            })
         }
      } catch (error: any) {
         setResult({
            loading: false,
            error: true,
            message: error.response?.data?.message || 'Щось пішло не так, спробуйте ще раз'
         });
      }
   };

   return (
      <form onSubmit={handleSubmit} className='flex flex-col items-end gap-5 max-lg:items-center'>
         <Input type='text' name='FullName' placeholder="ІМ'Я ТА ПРІЗВИЩЕ" setValue={setName} />
         <Input type='tel' name='Telephon' placeholder="НОМЕР ТЕЛЕФОНУ" setValue={setPhone} />
         <Input type='email' name='Email' placeholder="E-MAIL" setValue={setEmail} />
         <Input type='text' name='TG' placeholder="ЮЗЕРНЕЙМ В ТЕЛЕГРАМ" setValue={settgName} />
         <p className={`text-sm text-right ${result.error ? 'text-red-500' : 'text-secondary'} ${result.message ? 'block' : 'hidden'}`}>{result.message}</p>
         <Button type='filled' text='записатись на курс' onClick={() => { }} additionalStyles='w-fit' />
      </form>
   )
}

export default ContactForm