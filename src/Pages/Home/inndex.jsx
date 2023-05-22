import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'
import Cart from '../../Components/Card'
import Layout from '../../Components/Layout'
import ProductDetail from '../../Components/ProductDetail'

function Home () {
  const { setSearchBytitle, filterItmes } = useContext(ShoppingCartContext)
  const renderView = () => {
    if (filterItmes?.length > 0) {
      return (
        filterItmes?.map(item => (
          <Cart
            key={item.id}
            id={item.id}
            name={item.category.name}
            image={item.images[0]}
            title={item.title}
            price={item.price}
            description={item.description}
          />
        ))
      )
    } else {
      return (
        <div>We don't have anything</div>
      )
    }
  }

  return (
    <Layout>
      <div>
        <h2 className='text-2xl font-bold m-4'>
          Exclusive Producs
        </h2>
      </div>
      <label
        htmlFor='search'
        className='mb-2 text-sm font-medium text-gray-900 sr-only'
      >
        Search
      </label>
      <div className='relative w-3/5 my-2'>
        <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
          <svg aria-hidden='true' className='w-5 h-5 text-gray-500 ' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' /></svg>
        </div>
        <input
          type='search'
          id='search'
          className='block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400'
          placeholder='Search'
          required
          onChange={(event) => { setSearchBytitle(event.target.value) }}
        />
      </div>
      <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
        {
          renderView()
        }
      </div>
      <ProductDetail />
    </Layout>
  )
}

export default Home
