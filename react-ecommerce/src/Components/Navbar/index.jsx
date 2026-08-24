import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { ShoppingBagIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../Context'

const Navbar = () =>{
    const  activeStyle = 'underline underline-offset-4'
    const contex = useContext(ShoppingCartContext)
    
    return (
        <nav className='flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light bg-white'>
            <ul className='flex items-center gap-3'>
                <li className='font-semibold text-lg'>
                    <NavLink 
                        to='/' 
                        >
                        Shopi
                    </NavLink>   
                </li>
                <li>
                    <NavLink 
                        to='/' 
                        onClick={() => contex.setSearchByCategory()}
                        className={({isActive}) => isActive ? activeStyle : undefined }
                        >
                        All
                    </NavLink>   
                </li>
                <li>
                    <NavLink 
                        to='/clothes'
                        onClick={() => contex.setSearchByCategory('clothes')}
                        className={({isActive}) => isActive ? activeStyle : undefined }
                    >
                        Clothes
                    </NavLink>   
                </li>
                 <li>
                    <NavLink 
                        to='/electronics' 
                        onClick={() => contex.setSearchByCategory('electronics')}
                        className={({isActive}) => isActive ? activeStyle : undefined }
                        >
                        Electronics
                    </NavLink>   
                </li>
                <li>
                    <NavLink 
                        to='/furnitures' 
                        onClick={() => contex.setSearchByCategory('furnitures')}
                        className={({isActive}) => isActive ? activeStyle : undefined }
                        >
                        Furnitures
                    </NavLink>   
                </li>
                <li>
                    <NavLink 
                        to='/toys'
                        onClick={() => contex.setSearchByCategory('toys')}
                        className={({isActive}) => isActive ? activeStyle : undefined }
                        >
                        Toys
                    </NavLink>   
                </li>
                <li>
                    <NavLink 
                        to='/others' 
                        onClick={() => contex.setSearchByCategory('others')}
                        className={({isActive}) => isActive ? activeStyle : undefined }
                        >
                        Others
                    </NavLink>   
                </li>
            </ul>
             <ul className='flex items-center gap-3'>
                <li className='text-black/60'>
                   pruebas@test.com
                </li>
                <li>
                    <NavLink 
                        to='/my-orders'
                        className={({isActive}) => isActive ? activeStyle : undefined }
                        >
                        My Orders
                    </NavLink>   
                </li>
                <li>
                    <NavLink 
                        to='/my-account'
                        className={({isActive}) => isActive ? activeStyle : undefined }
                        >
                        My Account
                    </NavLink>   
                </li>
                 <li>
                    <NavLink
                        to='/sign-in'
                        className={({isActive}) => isActive ? activeStyle : undefined }
                        >
                        Sign In
                    </NavLink>
                </li>
                <li className='flex items-center justify-between'>
                     <ShoppingBagIcon className='h-6 w-6 text-black'></ShoppingBagIcon>
                     <div>{contex.cartProducts?.length}</div>
                </li>
               
            </ul>
        </nav>
    )
}

export default Navbar;