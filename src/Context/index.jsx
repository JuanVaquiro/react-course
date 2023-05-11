import { createContext, useState } from 'react'

export const ShoppingCartContex = createContext()

function ShoppingCartProvider ({ children }) {
  const [count, setCount] = useState(0)
  console.log('count', count)
  return (
    <ShoppingCartContex.Provider
      value={{
        count,
        setCount
      }}
    >
      {children}
    </ShoppingCartContex.Provider>
  )
}

export default ShoppingCartProvider
