import { XMarkIcon , CurrencyDollarIcon } from '@heroicons/react/24/outline'

const OrdersCard = props  =>{
    const {totalProducts, totalPrice} = props

    return(
        <div className='flex justify-between items-center rounded-lg bg-white mb-3 border border-black'>
           <p>
                <span>{new Date().toISOString}</span>
                <span>{totalPrice}</span>
                <span>{totalProducts}</span>
           </p>
        </div>
    )
}

export default OrdersCard