import { useRoutes, BrowserRouter } from 'react-router-dom'
import ShoppingCartProvider from '../../Context'
import Navbar from '../../Components/Navbar'
import CheckoutSideMenu from '../../Components/CheckoutSideMenu'
import Home from '../Home/inndex'
import MyAccount from '../MyAccount'
import MyOrder from '../MyOrder/inde'
import MyOrders from '../MyOrders'
import NotFound from '../NotFound'
import SignIn from '../Signin'
import './App.css'

const AppRouters = () => {
  const routes = useRoutes([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/Electronics',
      element: <Home />
    },
    {
      path: '/Clothes',
      element: <Home />
    },
    {
      path: '/Others',
      element: <Home />
    },
    {
      path: '/MyAccount',
      element: <MyAccount />
    },
    {
      path: '/MyOrder',
      element: <MyOrder />
    },
    {
      path: '/MyOrders',
      element: <MyOrders />
    },
    {
      path: '/MyOrders/last',
      element: <MyOrder />
    },
    {
      path: '/MyOrders/:id',
      element: <MyOrder />
    },
    {
      path: '/SignIn',
      element: <SignIn />
    },
    {
      path: '/*',
      element: <NotFound />
    }
  ])
  return routes
}

function App() {
  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <AppRouters />
        <Navbar />
        <CheckoutSideMenu />
      </BrowserRouter>
    </ShoppingCartProvider>
  )
}

export default App
