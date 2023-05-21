import { useContext } from 'react'
import { PlusIcon, CheckIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../Context'

function Cart ({ id, name, image, title, price, description }) {
  const productData = { id, name, image, title, price, description }
  const {
    count,
    setCount,
    openProductDetail,
    closeProductDetail,
    setProductToShow,
    cartProducts,
    setCartProducts,
    openCheckoutSideMenu
  } = useContext(ShoppingCartContext)

  const showProduct = (productDetail) => {
    openProductDetail()
    setProductToShow(productDetail)
  }

  const addProductsToCart = (event, prodcutData) => {
    event.stopPropagation()
    setCount(count + 1)
    setCartProducts([...cartProducts, prodcutData])
    openCheckoutSideMenu()
    closeProductDetail()
  }

  const renderIcon = (id) => {
    const isInCart = cartProducts.filter(product => product.id === id).length > 0
    if (isInCart) {
      return (
        <button className='absolute top-0 right-0 flex items-center justify-center bg-green-500/80 text-white w-6 h-6 rounded-full m-2 p-1'>
          <CheckIcon className='w-6 h-6' />
        </button>
      )
    } else {
      return (
        <button
          className='absolute top-0 right-0 flex items-center justify-center bg-white w-6 h-6 rounded-full m-2 p-1'
          onClick={(event) => addProductsToCart(event, productData)}
        >
          <PlusIcon className='w-6 h-6' />
        </button>
      )
    }
  }

  return (
    <div
      className='bg-white cursor-pointer w-56 h-60 rounded-lg'
      onClick={() => showProduct(productData)}
    >
      <figure className='relative mb-2 w-full h-4/5'>
        <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-sm m-2 px-3 py-0.5'>
          {name}
        </span>
        <img
          className='w-full h-full object-cover rounded-lg'
          src={image}
          alt={title}
        />
        {
          renderIcon(id)
        }
      </figure>
      <p className='flex justify-between'>
        <span className='text-sm font-light'>{title}</span>
        <span className='text-lg font-medium'>${price}</span>
      </p>
    </div>
  )
}

export default Cart
