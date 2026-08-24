import { useContext } from 'react'
import { XMarkIcon, CurrencyDollarIcon} from '@heroicons/react/24/outline'
import { ShoppingCartContext } from '../../Context'
import OrderCard from '../OrderCard'
import { totalPrice } from '../../utils'
import './styles.css'


const CheckOutSideMenu = () => {
    const context = useContext(ShoppingCartContext)
    // console.log('Product show', context.productToShow); 
    // console.log('shopping cart', context.cartProducts) // valor del carrito de compras 

    const handleDelete = (id) =>{
        const filteredProducts = context.cartProducts.filter(product => product.id != id )
        context.setCartProducts(filteredProducts)
        context.setCount(filteredProducts.length)
    }

     const handleCheckout = () =>{
        const orderToAdd = {
            date: new Date().toISOString(),
            product: context.cartProducts,
            totalProducts: context.cartProducts.length,
            totalPrice : totalPrice(context.cartProducts)
        }
        context.setOrder([...context.order, orderToAdd])
        context.setCartProducts([])
    }
 
    
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
            <div className='px-6 overflow-y-scroll flex-1'>
                {
                    context.cartProducts.map(product => (
                        <OrderCard 
                            key={product.id}
                            id={product.id} 
                            title={product.title} 
                            imgUrl={product.images} 
                            price={product.price}
                            handleDelete = {handleDelete}
                        >
                        </OrderCard>
                    ))
                }
            </div>
            <div className='px-6 mb-6'>
                <p className='flex justify-between items-center mb-2'>
                    <span className='font-light'>Total:</span>
                    <div className='flex items-center justify-between'>
                        <CurrencyDollarIcon className='h-6 w-6  text-black cursor-pointer micro'></CurrencyDollarIcon>
                        <span className='font-medium text-2xl'>{totalPrice(context.cartProducts)}</span>
                    </div>
                </p>
                <button className='w-full bg-black py-3 text-white rounded-lg' onClick={() => {handleCheckout()}}>Checkout</button>
            </div>
           
        </aside>
    )
}

export default CheckOutSideMenu