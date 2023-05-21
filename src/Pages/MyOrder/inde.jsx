import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'
import Layout from '../../Components/Layout'
import OrderCard from '../../Components/OrderCart'

function MyOrder () {
  const { order } = useContext(ShoppingCartContext)
  return (
    <Layout>
      MY Order
      <article className='px-6 overflow-y-scroll flex-1'>
        {
          order?.slice(-1)[0].map((product, index) => (
            <OrderCard
              key={index}
              id={product.id}
              title={product.title}
              imageUrl={product.image}
              price={product.price}
            />
          ))
        }
      </article>
    </Layout>
  )
}

export default MyOrder
