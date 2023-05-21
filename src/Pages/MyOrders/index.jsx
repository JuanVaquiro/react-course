import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCartContext } from '../../Context'
import Layout from '../../Components/Layout'
import OrdersCard from '../../Components/OrdersCard'

function MyOrders () {
  const { order } = useContext(ShoppingCartContext)
  console.log(order)
  return (
    <Layout>
      {
        order.map((itemOrder, index) => (
          <Link
            to={`/MyOrders/${index}`}
            key={index}
          >
            <OrdersCard
              date={itemOrder.date}
              totalPrice={itemOrder.totalPrice}
              totalProducts={itemOrder.totalProducts}
            />
          </Link>
        ))
      }
    </Layout>
  )
}

export default MyOrders
