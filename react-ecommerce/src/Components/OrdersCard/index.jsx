import { ChevronRightIcon , CurrencyDollarIcon } from '@heroicons/react/24/outline'

const OrdersCard = props  =>{
    const {totalProducts, totalPrice,date} = props

    return(
        <div className='flex justify-between items-center rounded-lg bg-white border border-black w-90 p-4 mb-3'>
           <div className='flex justify-between w-full'>
            <p className='flex flex-col'>
                <span>{date}</span>
                <span className='font-light'>{totalProducts} articles</span>
            </p>
            <p className='flex justify-center items-center gap-2'>
                <div className='flex items-center'>
                     <CurrencyDollarIcon className='h-6 w-6  text-black cursor-pointer '></CurrencyDollarIcon>
                    <span className='font-medium text-2xl'>{totalPrice}</span>
                </div>
                <div>
                    <ChevronRightIcon className='h-6 w-6  text-black cursor-pointer '></ChevronRightIcon>
                </div>

            </p>
           </div>
        </div>
    )
}

export default OrdersCard