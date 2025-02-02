import Title from '../../../Ui/Title/Title'
import InfoItem from '../InfoItem/InfoItem'

const Info = () => {
   const infoArr: string[] = [
      'Покупець оплачує продукт у твоєму Shopify-магазині',
      'Ти одразу отримуєш кошти на свій рахунок в доларах',
      'Shopify-додаток постачальника автоматично замовляє товар на адресу клінєнта',
      'Постачальник відправляє замовлення клієнту',
      'Клієнт отримує своє замовлення, а ти – свою націнку на продукті. Чистими від $20 до $70 з однієї продажі',
   ]

   return (
      <div>
         <div className='relative' id='info'>
            <div className=' absolute -top-16 left-0 -z-10 max-md:top-40'>
               <img src="/images/infoBg1.png" alt="glow" />
            </div>
            <div className="container py-24 max-sm:py-10">
               <Title width='w-9/12' glow={true}>
                  що таке <span className='text-secondary'>shopify</span>-дропшипінг?
               </Title>
               <div className='flex justify-between items-center gap-7 pt-12 max-lg:flex-col'>
                  <div className='w-6/12 flex flex-col gap-4 max-lg:w-full'>
                     {infoArr.map((item, index) => (
                        <InfoItem text={item} index={++index} key={index} />
                     ))}
                  </div>
                  <div>
                     <img src="/images/infoImage.png" alt="" />
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Info