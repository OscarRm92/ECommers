import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ChevronLeftIcon} from '@heroicons/react/24/outline'
import { ShoppingCartContext } from '../../Context'
import Layout from '../../Components/Layout'
import OrderCard from '../../Components/OrderCard'



function MyOrder() {
  const context = useContext(ShoppingCartContext)
  console.log(context.order?.slice(-1)[0]);
  
  

  return (
    <>
     <Layout>
      <div className='flex w-80 items-center relative justify-center mb-6'>
        <Link to='/my-orders' className='absolute left-0 '>
          <ChevronLeftIcon className='h-6 w-6  text-black cursor-pointer'></ChevronLeftIcon>
        </Link>
        <h1>My Order</h1>
      </div>
        <div className='flex flex-col w-80'>
            {
                 context.order?.slice(-1)[0]?.products.map(product => (
                    <OrderCard 
                        key={product.id}
                        id={product.id} 
                        title={product.title} 
                        imgUrl={product.images} 
                        price={product.price}
                    >
                    </OrderCard>
                ))
            }
        </div>
     </Layout>
    </>
  )
}

export default MyOrder
