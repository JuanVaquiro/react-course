import { createContext, useState, useEffect } from 'react'

export const ShoppingCartContext = createContext()

function ShoppingCartProvider ({ children }) {
  // Get Producs
  const URL = 'https://api.escuelajs.co/api/v1/products'
  const [items, setItems] = useState(null)
  const [filterItmes, setFilterItmes] = useState(null)
  // GET BY TITLES
  const [searchBytitle, setSearchBytitle] = useState(null)

  const setFetch = async () => {
    const resp = await fetch(URL)
    const data = await resp.json()
    setItems(data)
  }
  useEffect(() => {
    setFetch()
  }, [])

  const filterItmesByTitle = (items, searchBytitle) => {
    return items?.filter(item =>
      item.title.toLowerCase().includes(searchBytitle.toLowerCase()))
  }

  useEffect(() => {
    if (searchBytitle) setFilterItmes(filterItmesByTitle(items, searchBytitle))
  }, [items, searchBytitle])

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
        items,
        setItems,
        searchBytitle,
        setSearchBytitle,
        filterItmes,
        setFilterItmes,
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
