import { createContext, useState } from 'react'

export const ShoppingCartContext = createContext()

function ShoppingCartProvider ({ children }) {
  const [count, setCount] = useState(0)
  const [isProductDatail, setIsProductDatail] = useState(false)
  const openProductDetail = () => setIsProductDatail(true)
  const closeProductDetail = () => setIsProductDatail(false)

  return (
    <ShoppingCartContext.Provider
      value={{
        count,
        setCount,
        isProductDatail,
        openProductDetail,
        closeProductDetail
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  )
}

export default ShoppingCartProvider
