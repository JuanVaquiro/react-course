import { createContext, useState } from 'react'

export const ShoppingCartContext = createContext()

function ShoppingCartProvider ({ children }) {
  // Shopping Cart : increment quantity
  const [count, setCount] = useState(0)

  // Shopping Cart : Add products to cart
  const [cartProducts, setCartProducts] = useState([])

  // Shopping Cart : Order
  const [order, setOrder] = useState([])

  // Product Detail : Open/Close
  const [isProductDatail, setIsProductDatail] = useState(false)
  const openProductDetail = () => setIsProductDatail(true)
  const closeProductDetail = () => setIsProductDatail(false)

  // Product Detail : Show product
  const [productToShow, setProductToShow] = useState({})

  // Checkout Side menu : Open/Close
  const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false)
  const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true)
  const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false)

  return (
    <ShoppingCartContext.Provider
      value={{
        count,
        setCount,
        isProductDatail,
        openProductDetail,
        closeProductDetail,
        productToShow,
        setProductToShow,
        cartProducts,
        setCartProducts,
        isCheckoutSideMenuOpen,
        openCheckoutSideMenu,
        closeCheckoutSideMenu,
        order,
        setOrder
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  )
}

export default ShoppingCartProvider
