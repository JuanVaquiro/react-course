import { useRoutes, BrowserRouter } from 'react-router-dom'
import Navbar from '../../Components/Navbar'
import Home from '../Home/inndex'
import MyAccount from '../MyAccount'
import MyOrder from '../MyOrder/inde'
import MyOrders from '../MyOrders'
import NotFound from '../NotFound'
import SignIn from '../Signin'
import './App.css'

const AppRouters = () => {
  let routes = useRoutes([
    {
      path: '/',
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
      path: '/SignIn',
      element: <SignIn />
    },
    {
      path: '/*',
      element: <NotFound />
    },
  ])
  return routes
}

function App() {
  return (
    <BrowserRouter>
      <AppRouters />
      <Navbar />
    </BrowserRouter>
  )
}

export default App
