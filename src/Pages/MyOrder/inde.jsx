import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ChevronLeftIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../Context'
import Layout from '../../Components/Layout'
import OrderCard from '../../Components/OrderCart'

function MyOrder () {
  const { order } = useContext(ShoppingCartContext)
  const currentPath = window.location.pathname
  let index = currentPath.substring(currentPath.lastIndexOf('/') + 1)

  if (index === 'last') index = order?.length - 1

  return (
    <Layout>
      <Link to='/MyOrders' className=''>
        <button className='flex items-center justify-center gap-7 w-80 my-6'>
          <ChevronLeftIcon className='h-6 w-6' />
          <h2 className='text-2xl font-semibold'>My Orders</h2>
        </button>
      </Link>
      <article className='flex flex-col w-80'>
        {
          order?.[index]?.products.map((product, index) => (
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
