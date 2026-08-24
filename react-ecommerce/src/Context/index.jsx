import { createContext, useState , useEffect} from 'react'


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

    /**
     * Shopping Cart  · Add product to cart
     */
    const [cartProducts, setCartProducts] = useState([])

    /**
     * Checkout side menu Detal · Open/Clouse 
     */
    const [isCheckOutSideMenu, setCheckOutSideMenu] = useState(false)
    const openCheckOutSideMenu = () => setCheckOutSideMenu(true)
    const clouseCheckOutSideMenu = () => setCheckOutSideMenu(false)

    /**
     * Shopping Cart · Order 
     */
    const [order, setOrder] = useState([])


    /**
     * get Products 
     */
    const [items, setItems] = useState(null)

    useEffect(() => {
        fetch('https://api.escuelajs.co/api/v1/products')
        .then(response => response.json())
        .then(data => setItems(data))
    },[] )
  
    /**
     * Get Product by title
     */
    const [searchByTitle, setSearchByTitle] = useState(null)


    return(
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            openProductDetail,
            clouseProductDetail,
            isProductDetailOpen,
            productToShow,
            setProductToShow,
            cartProducts,
            setCartProducts,
            isCheckOutSideMenu,
            openCheckOutSideMenu,
            clouseCheckOutSideMenu,
            order,
            setOrder,
            items,
            setItems,
            searchByTitle,
            setSearchByTitle
        }}>
            {children}
        </ShoppingCartContext.Provider>
        
    )
}