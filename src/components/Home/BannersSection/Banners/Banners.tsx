import Banner from '../Banner/Banner'

const Banners = () => {
   return (
      <div className=''>
         <Banner text='Shopify' textColor='primary' bgColor='white' />
         <Banner text='ecommerce' textColor='primary' bgColor='secondary' />
         <Banner text='facebook &nbsp; meta' textColor='white' bgColor='primary' />
      </div>
   )
}

export default Banners