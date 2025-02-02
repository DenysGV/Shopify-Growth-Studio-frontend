import Title from '../../../Ui/Title/Title'
import ContactForm from '../ContactForm/ContactForm'

const Contact = () => {
  return (
    <div className=' relative' id='contact'>
      <div className=' absolute bottom-0 right-0 -z-10'>
        <img src="/images/contactBg1.png" alt="glow" />
      </div>
      <div className="container flex items-center gap-7 max-lg:flex-col py-24 max-lg:py-12">
        <div className='w-6/12 max-lg:w-full'>
          <Title width='w-full' glow={false} align='left'>
            СТВОРИ АВТОМАТИЗО­ВАНИЙ МАГАЗИН НА <span className='text-secondary'>SHOPIFY</span> З ПРИБУТКОМ ВІД <span className='text-secondary'>$15,000+</span>
          </Title>
        </div>
        <div className='w-6/12 max-lg:w-full'>
          <ContactForm />
        </div>
      </div>
    </div>
  )
}

export default Contact