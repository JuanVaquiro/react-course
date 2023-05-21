import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { XMarkIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../Context'
import OrderCard from '../OrderCart'
import { totalPrice } from '../Utils'

function CheckoutSideMenu () {
  const {
    isCheckoutSideMenuOpen,
    closeCheckoutSideMenu,
    cartProducts,
    setCartProducts,
    count,
    setCount,
    order,
    setOrder
  } = useContext(ShoppingCartContext)
  const isClose = isCheckoutSideMenuOpen ? 'flex' : 'hidden'

  const handleDeleteMyOrder = (id) => {
    const filterProducts = cartProducts.filter((product) => product.id !== id)
    setCartProducts(filterProducts)
    setCount(count - 1)
  }

  const handleCheckout = () => {
    const today = new Date()
    const orderToAdd = {
      date: today.toLocaleString(),
      products: cartProducts,
      totalProducts: cartProducts.length,
      totalPrice: totalPrice(cartProducts)
    }
    setOrder([...order, orderToAdd])
    setCartProducts([])
    setCount(0)
  }

  return (
    <aside className={`${isClose} flex-col fixed right-0 top-[68px] border bg-white border-black rounded-lg w-[360px] h-[calc(100vh-80px)]`}>
      <div className='flex justify-between items-center p-6'>
        <h2 className='font-medium text-xl'>My Order</h2>
        <button>
          <XMarkIcon
            className='h-6 w-6 '
            onClick={() => closeCheckoutSideMenu()}
          />
        </button>
      </div>
      <article className='px-6 overflow-y-scroll flex-1'>
        {
          cartProducts.map((product, index) => (
            <OrderCard
              key={index}
              id={product.id}
              title={product.title}
              imageUrl={product.image}
              price={product.price}
              handleDelete={handleDeleteMyOrder}
            />
          ))
        }
      </article>
      <div className='px-6 m-6'>
        <p className='flex justify-between items-center mb-3'>
          <span className=''>Total:</span>
          <span className='text-2xl font-semibold'>${totalPrice(cartProducts)}</span>
        </p>
        <Link to='/MyOrders/last'>
          <button
            className='text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 mr-2 mb-2'
            onClick={() => handleCheckout()}
          >
            Checkout
          </button>
        </Link>
      </div>
    </aside>
  )
}

export default CheckoutSideMenu
