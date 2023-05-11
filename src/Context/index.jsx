import { createContext } from 'react'

const ShoppingCartContex = createContext()

function ShoppingCartProvider ({ children }) {
  return (
    <ShoppingCartContex.Provider>
      {children}
    </ShoppingCartContex.Provider>
  )
}

export default ShoppingCartProvider
