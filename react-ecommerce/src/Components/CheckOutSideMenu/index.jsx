import { useContext } from 'react'
import { XMarkIcon} from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../Context'
import OrderCard from '../OrderCard'
import './styles.css'


const CheckOutSideMenu = () => {
    const context = useContext(ShoppingCartContext)
    // console.log('Product show', context.productToShow); 
    // console.log('shopping cart', context.cartProducts) // valor del carrito de compras 
 
    
    return(
        <aside 
        className={`${context.isCheckOutSideMenu ? 'flex' : 'hidden'} checkout-side-menu flex-col fixed right-0 border border-black rounded-lg bg-white `}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl' >My Order</h2>
                <dix>
                    <XMarkIcon 
                        className='h-6 w-6 text-black cursor-pointer'
                        onClick={() => context.clouseCheckOutSideMenu()} 
                    ></XMarkIcon>
                </dix>
            </div>
            <div className='px-6 overflow-y-scroll'>
                {
                    context.cartProducts.map(product => (
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
           
        </aside>
    )
}

export default CheckOutSideMenu