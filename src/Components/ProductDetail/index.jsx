import { useContext } from 'react'
import { XMarkIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../Context'

function ProductDetail () {
  const { isProductDatail, closeProductDetail, productToShow } = useContext(ShoppingCartContext)
  const isClose = isProductDatail ? 'flex' : 'hidden'
  return (
    <aside className={`${isClose} flex-col fixed right-0 top-[68px] border bg-white border-black rounded-lg w-[360px] h-[calc(100vh-80px)]`}>
      <div className='flex justify-between items-center p-4'>
        <h2 className='font-medium text-xl'>Detail</h2>
        <button>
          <XMarkIcon
            className='h-6 w-6 '
            onClick={() => closeProductDetail()}
          />
        </button>
      </div>
      <figure className='px-8'>
        <img
          className='w-full h-fulll rounded-lg'
          src={productToShow.image}
          alt={productToShow.title}
        />
      </figure>
      <p className='flex flex-col px-8 py-4'>
        <span className='font-medium text-2xl mb-2'>${productToShow.price}</span>
        <span className='font-medium text-md'>{productToShow.title}</span>
        <span className='font-light text-sm'>{productToShow.description}</span>
      </p>
    </aside>
  )
}

export default ProductDetail
