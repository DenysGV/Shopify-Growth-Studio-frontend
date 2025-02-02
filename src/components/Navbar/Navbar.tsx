import { useState } from 'react'
import Button from '../Ui/Button/Button'
import useNavigation from '../../hooks/useNavigation';
import useAppSelector from '../../hooks/useAppSelector';

const Navbar = () => {
   const [burgerActive, setBurgerActive] = useState<boolean>(false)

   const { moveToPage } = useNavigation();
   const auth = useAppSelector((state) => state.root.auth);

   const toggleBurgerMenu = () => {
      setBurgerActive(prev => !prev)
   }

   return (
      <div className=''>
         <div className="container">
            <div className={`${burgerActive && 'bg-primary absolute top-0 left-0 w-screen h-screen z-10'}`}></div>
            <div className={`flex justify-between items-center py-6 relative`}>
               <div><img src="/images/logo.png" alt="logo" className='cursor-pointer max-[425px]:w-20' onClick={() => { moveToPage('') }} /></div>
               <ul className={`flex gap-7  ${burgerActive ? 'max-md:flex max-md:absolute max-md:flex-col max-md:right-0 max-md:top-24 max-md:text-right z-20' : 'max-md:hidden'}`}>
                  <li><a href="/" className='text-white'>Головна</a></li>
                  <li><a href="/#reviews" className='text-white'>відгуки</a></li>
                  <li><a href="/#faq" className='text-white'>FAQ</a></li>
                  <li><a href="/#contact" className='text-white'>контакти</a></li>
               </ul>
               {
                  auth.isAuth ? <p className='text-sm text-white cursor-pointer' onClick={() => { moveToPage('Lectures') }}>{auth.user?.fullName}</p> : <Button type='empty' text='Вхід' onClick={() => { moveToPage('Login') }} additionalStyles={`${burgerActive ? 'max-md:flex max-md:absolute max-md:right-0 max-md:top-80 z-20' : 'max-md:hidden'}`} />
               }
               <div className='hidden flex-col gap-2 cursor-pointer max-md:flex z-20' onClick={toggleBurgerMenu}>
                  <div className={`w-7 h-0.5 bg-white ${burgerActive && 'hidden'}`}></div>
                  <div className={`w-7 h-0.5 bg-white ${burgerActive && '-rotate-45'}`}></div>
                  <div className={`w-7 h-0.5 bg-white ${burgerActive && 'rotate-45 -mt-2.5'}`}></div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Navbar