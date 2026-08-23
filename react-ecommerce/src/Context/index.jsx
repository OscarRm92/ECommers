import { createContext, useState } from 'react'

export const ShoppingCartContext = createContext()

export const ShoppingCartContextProvider = ({children}) => {
    /**
     * Shopint card · Increment quantity
     */
    const [count, setCount] = useState(0)

    // console.log('count', count);
    /**
     * Product Detal · Open/Clouse 
     */
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
    const openProductDetail = () => setIsProductDetailOpen(true)
    const clouseProductDetail = () => setIsProductDetailOpen(false)

    /**
     * Product Detail · Show product
     */
    const [productToShow, setProductToShow] = useState({})


    return(
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            openProductDetail,
            clouseProductDetail,
            isProductDetailOpen,
            productToShow,
            setProductToShow
        }}>
            {children}
        </ShoppingCartContext.Provider>
        
    )
}