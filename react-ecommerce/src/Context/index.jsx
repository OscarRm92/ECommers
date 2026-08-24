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
    const [filteredItems, setfilteredItems] = useState(null)


    useEffect(() => {
        fetch('https://api.escuelajs.co/api/v1/products')
        .then(response => response.json())
        .then(data => setItems(data))
    },[] )
  
    /**
     * Get Product by title
     */
    const [searchByTitle, setSearchByTitle] = useState(null)

    /**
     * Get Product by category
     */
    const [searchByCategory, setSearchByCategory] = useState(null)

    /**
     * Funtion fot search items by filter
     * @param {Array} items 
     * @param {Array} searchByTitle 
     * @returns Array 
     */
    const filteredItemsByTitle = (items, searchByTitle) =>{
        return items?.filter(item => item?.title?.toLowerCase().includes(searchByTitle.toLowerCase()))
    }

    /**
     * 
     * @param {Array} items 
     * @param {Array} searchByCategory 
     * @returns Array
     */
    const filteredItemsByCategory = (items, searchByCategory) =>{
        return items?.filter(item => item?.category?.name.toLowerCase().includes(searchByCategory.toLowerCase()))
    }

    const filterBy = (searchType, items,searchByTitle,searchByCategory) =>{
        // console.log('filtrado',searchType, searchByTitle,searchByCategory );
        
        switch(searchType){
            case 'BY_TITLE': 
                return filteredItemsByTitle(items,searchByTitle)
            break;
            case 'BY_CATEGORY':
                return filteredItemsByCategory(items,searchByCategory)
            break;
            case 'BY_TITLE_AND_CATEGORY':
                return filteredItemsByCategory(items,searchByCategory).filter(item => item?.title?.toLowerCase().includes(searchByTitle.toLowerCase()))
            default:
                return items 
            break;
        }

    }

    useEffect(() => {
        console.log('useeffect', searchByTitle, searchByCategory );
        if(searchByTitle && searchByCategory) setfilteredItems(filterBy('BY_TITLE_AND_CATEGORY',items,searchByTitle,searchByCategory))
        if(searchByTitle && !searchByCategory) setfilteredItems(filterBy('BY_TITLE',items,searchByTitle,searchByCategory))
        if(!searchByTitle && searchByCategory) setfilteredItems(filterBy('BY_CATEGORY',items,searchByTitle,searchByCategory))
        if(!searchByTitle && !searchByCategory) setfilteredItems(filterBy(null,items,searchByTitle,searchByCategory))
    },[items, searchByTitle, searchByCategory] )

    //  console.log(filteredItems?.length);
    

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
            setSearchByTitle,
            filteredItems,
            setfilteredItems,
            searchByCategory,
            setSearchByCategory
        }}>
            {children}
        </ShoppingCartContext.Provider>
        
    )
}