
import Home from '../Home/inndex'
import MyAccount from '../MyAccount'
import MyOrder from '../MyOrder/inde'
import MyOrders from '../MyOrders'
import NotFound from '../NotFound'
import SignIn from '../Signin'
import './App.css'

function App() {
  return (
    <div className='bg-red-400'>
     <Home />
     <MyAccount />
     <MyOrder />
     <MyOrders />
     <NotFound />
     <SignIn />
    </div>
  )
}

export default App
