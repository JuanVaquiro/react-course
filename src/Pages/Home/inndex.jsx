import { useEffect, useState } from 'react'
import Cart from '../../Components/Card'
import Layout from '../../Components/Layout'
import ProductDetail from '../../Components/ProductDetail'

const URL = 'https://api.escuelajs.co/api/v1/products'

function Home () {
  const [items, setItems] = useState(null)
  const setFetch = async () => {
    const resp = await fetch(URL)
    const data = await resp.json()
    setItems(data)
  }

  useEffect(() => {
    setFetch()
  }, [])

  return (
    <Layout>
      <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
        {
          items?.map(item => (
            <Cart
              key={item.id}
              name={item.category.name}
              image={item.images[0]}
              title={item.title}
              price={item.price}
            />
          ))
        }
      </div>
      <ProductDetail />
    </Layout>
  )
}

export default Home
