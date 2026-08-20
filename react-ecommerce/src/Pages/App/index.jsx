import { useRoutes, BrowserRouter } from 'react-router-dom'
import Home from '../Home'
import MyAccount from '../MyAccount'
import MyOrder from '../MyOrder'
import MyOrders from '../MyOrders'
import NotFound from '../NotFound'
import SingnIn from '../SingnIn'
import Navbar from '../../Components/Navbar'
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
     <BrowserRouter>
     <AppRoutes />
     <Navbar></Navbar>
     </BrowserRouter>
  )
}

export default App
