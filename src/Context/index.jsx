import { createContext, useState } from 'react'

export const ShoppingCartContext = createContext()

function ShoppingCartProvider ({ children }) {
  // Shopping Cart : increment quantity
  const [count, setCount] = useState(0)

  // Product Detail : Open/Close
  const [isProductDatail, setIsProductDatail] = useState(false)
  const openProductDetail = () => setIsProductDatail(true)
  const closeProductDetail = () => setIsProductDatail(false)

  // Product Detail : Show product
  const [productToShow, setProductToShow] = useState({})

  return (
    <ShoppingCartContext.Provider
      value={{
        count,
        setCount,
        isProductDatail,
        openProductDetail,
        closeProductDetail,
        productToShow,
        setProductToShow
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  )
}

export default ShoppingCartProvider
