import { useContext } from 'react'
import { PlusIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../Context'

function Cart ({ name, image, title, price, description }) {
  const {
    count,
    setCount,
    openProductDetail,
    setProductToShow
  } = useContext(ShoppingCartContext)

  const showProduct = (name, image, title, price, description) => {
    openProductDetail()
    setProductToShow({ name, image, title, price, description })
  }
  return (
    <div
      className='bg-white cursor-pointer w-56 h-60 rounded-lg'
      onClick={() => showProduct(name, image, title, price, description)}
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
        <button
          className='absolute top-0 right-0 flex items-center justify-center bg-white w-6 h-6 rounded-full m-2 p-1'
          onClick={() => setCount(count + 1)}
        >
          <PlusIcon className='w-6 h-6' />
        </button>
      </figure>
      <p className='flex justify-between'>
        <span className='text-sm font-light'>{title}</span>
        <span className='text-lg font-medium'>${price}</span>
      </p>
    </div>
  )
}

export default Cart
