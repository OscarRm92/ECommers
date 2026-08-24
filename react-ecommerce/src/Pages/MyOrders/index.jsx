import { useContext } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../../Components/Layout'
import OrdersCard from '../../Components/OrdersCard'
import { ShoppingCartContext } from '../../Context'

function MyOrders() {
  const context = useContext(ShoppingCartContext)
  console.log(context.order, new Date().toISOString);
  
  

  return (
    <>
     <Layout>
      <div className='flex w-80 items-center relative justify-center'>
        <h1>My Orders</h1>
      </div>
        
        {
          context.order?.map((order, index) => (
            <Link key={index} to={`/my-orders/${index}`}>
              <OrdersCard 
                date={order.date}
                totalProducts={order.totalProducts} 
                totalPrice={order.totalPrice} >
              </OrdersCard>
            </Link>
          ))
        }        
     </Layout>
    </>
  )
}

export default MyOrders
