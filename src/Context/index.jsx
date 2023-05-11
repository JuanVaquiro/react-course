import { createContext, useState } from 'react'

export const ShoppingCartContext = createContext()

function ShoppingCartProvider ({ children }) {
  const [count, setCount] = useState(0)
  console.log('count', count)
  return (
    <ShoppingCartContext.Provider
      value={{
        count,
        setCount
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  )
}

export default ShoppingCartProvider
