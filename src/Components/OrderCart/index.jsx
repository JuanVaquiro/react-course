import { XMarkIcon } from '@heroicons/react/24/solid'

const OrderCard = ({ id, title, imageUrl, price, handleDelete }) => {
  let renderXmarkIcon
  if (handleDelete) {
    renderXmarkIcon = (
      <XMarkIcon
        className='w-6 h-6 cursor-pointer'
        onClick={() => handleDelete(id)}
      />
    )
  }
  return (
    <div className='flex justify-between items-center m-4'>
      <div className='flex items-center gap-2'>
        <figure className='w-20 h-20'>
          <img
            className='w-full h-full rounded-lg object-cover'
            src={imageUrl}
            alt={title}
          />
        </figure>
        <p className='text-sm font-light'>
          {title}
        </p>
      </div>
      <div className='flex items-center gap-2'>
        <p className='text-lg font-medium'>
          ${price}
        </p>
        <button>
          {renderXmarkIcon}
        </button>
      </div>
    </div>
  )
}

export default OrderCard
