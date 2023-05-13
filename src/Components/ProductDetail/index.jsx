import { useContext } from 'react'
import { XMarkIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../Context'

function ProductDetail () {
  const { isProductDatail, closeProductDetail } = useContext(ShoppingCartContext)
  const isClose = isProductDatail ? 'flex' : 'hidden'
  return (
    <aside className={`${isClose} flex-col fixed right-0 top-[68px] border bg-white border-black rounded-lg w-[360px] h-[calc(100vh-80px)] `}>
      <div className='flex justify-between items-center p-4'>
        <h2 className='font-medium text-xl'>Detalles</h2>
        <div>
          <XMarkIcon
            className='h-6 w-6'
            onClick={() => closeProductDetail()}
          />
        </div>
      </div>
    </aside>
  )
}

export default ProductDetail
