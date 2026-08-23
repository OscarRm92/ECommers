import { useRoutes, BrowserRouter } from 'react-router-dom'
import { ShoppingCartContextProvider } from '../../Context'
import Home from '../Home'
import MyAccount from '../MyAccount'
import MyOrder from '../MyOrder'
import MyOrders from '../MyOrders'
import NotFound from '../NotFound'
import SingnIn from '../SingnIn'
import Navbar from '../../Components/Navbar'
import CheckOutSideMenu from '../../Components/CheckOutSideMenu'
import './App.css'

const AppRoutes = () => {
  let routes = useRoutes(
    [
      { path: '/', element: <Home /> },
      { path: '/my-account', element: <MyAccount /> },
      { path: '/my-orders', element: <MyOrders /> },
      { path: '/my-order', element: <MyOrder /> },
      { path: '/sign-in', element: <SingnIn /> },
      { path: '*', element: <NotFound /> }
    ]
  )
  return routes
}

const App = () => {
  
  return (
    <ShoppingCartContextProvider>
      <BrowserRouter>
      <AppRoutes />
      <Navbar></Navbar>
      <CheckOutSideMenu></CheckOutSideMenu>
      </BrowserRouter>
    </ShoppingCartContextProvider>
  )
}

export default App
