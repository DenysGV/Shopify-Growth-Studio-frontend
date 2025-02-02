import useNavigation from '../../hooks/useNavigation';

const Footer = () => {
   const { moveToPage } = useNavigation();

   return (
      <footer className='container flex items-center justify-between py-5 max-sm:flex-col max-sm:gap-4'>
         <div><img src="/images/logo.png" alt="logo" className=' cursor-pointer' onClick={() => { moveToPage('') }} /></div>
         <div>
            <p className='text-base text-right text-white cursor-pointer font-medium max-sm:text-center' onClick={() => { moveToPage('Policy') }}>ПОЛІТИКА КОНФІДЕНЦІЙНОСТІ</p>
            <p className='text-base text-right text-white cursor-pointer font-medium pt-2 max-sm:text-center' onClick={() => { moveToPage('Garantee') }}>ГАРАНТІЯ ПОВЕРНЕННЯ</p>
         </div>
      </footer>
   )
}

export default Footer