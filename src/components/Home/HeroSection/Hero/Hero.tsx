import Typewriter from 'typewriter-effect'
import Button from '../../../Ui/Button/Button'

const Hero = () => {
   return (
      <section>
         <div className='relative'>
            <div><img src="/images/heroBg1.png" alt="heroBg1" className='absolute -z-10 max-md:top-20 max-md:-left-20' /></div>
            <div><img src="/images/heroBg2.png" alt="heroBg2" className='absolute -bottom-80 right-0 -z-10' /></div>
            <div className="container flex items-center justify-between gap-8 py-16 max-lg:flex-col max-lg:text-center">
               <div className='w-3/6 max-lg:w-full'>
                  <h1 className='text-5xl text-white font-medium max-sm:text-2xl'>
                     передаємо <br />
                     <span className='text-8xl text-secondary max-sm:text-4xl'>
                        <Typewriter
                           options={{
                              strings: ['Досвід', 'Знання', 'Навички'],
                              autoStart: true,
                              loop: true,
                              skipAddStyles: false
                           }}
                        />
                     </span>
                     <br />а не інформацію
                  </h1>
                  <p className='text-lg text-white opacity-80 pt-5 pb-8 max-sm:text-base '>shopify growth studio – технологічна освітня компанія та онлайн-школа дропшипінгу, яка допомагає українцям запускати онлайн-бізнес з нуля та збільшувати дохід вже активним онлайн-підприємцям. Допоможемо і вам!</p>
                  <a href="#info">
                     <Button type='filled' text='Розпочати' onClick={() => { }} additionalStyles='max-w-44 flex items-center justify-center max-lg:mx-auto' />
                  </a>
               </div>
               <div className='relative'>
                  <img src="/images/heroImage.png" alt="heroImage" />
                  <img src="/images/heroGlow.png" alt="heroGlow" className='absolute -top-7 -z-10' />
               </div>
            </div>
         </div>
      </section>
   )
}

export default Hero