import { XMarkIcon , CurrencyDollarIcon } from '@heroicons/react/24/solid'

const OrderCard = props  =>{
    const {id,title, imgUrl, price, handleDelete} = props

    return(
        <div className='flex justify-between items-center rounded-lg bg-white mb-3'>
            <div className='flex items-center gap-2'>
                <figure className='max-w-20 max-h-20'>
                    <img className='w-full h-full rounded-lg object-cover' src={imgUrl} alt={title}></img>
                </figure>
                <p className='text-sm font-light'>{title}</p>
            </div>
            <div className='flex items-center gap-2'>
                <div className='flex flex-row items-center gap-1'>
                    <CurrencyDollarIcon className='h-6 w-6 text-black cursor-pointer'></CurrencyDollarIcon>
                    <p className='text-lg font-medium'>{price}</p>
                </div>
                <XMarkIcon 
                    className='h-6 w-6 text-black cursor-pointer'
                    onClick={() => handleDelete(id)}
                ></XMarkIcon>
            </div>
        </div>
    )
}

export default OrderCard