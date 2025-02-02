import LoginForm from "../LoginForm/LoginForm"
import Title from "../../Ui/Title/Title"

const LoginMain = () => {
   return (
      <div className='container py-24 flex-grow flex flex-col justify-center max-sm:py-12'>
         <Title width="w-full" glow={true} >
            <span className="text-secondary">увійти</span> до курсу
         </Title>
         <div className="mx-auto w-6/12 max-lg:w-full">
            <p className="text-sm text-white py-6 text-center">дані для входу видаються <span className="text-secondary">разом із курсом</span></p>
            <LoginForm />
         </div>
      </div>
   )
}

export default LoginMain