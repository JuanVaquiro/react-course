import { createContext, useState, useEffect } from 'react'

export const ShoppingCartContext = createContext()

function ShoppingCartProvider ({ children }) {
  // Get Producs
  const URL = 'https://api.escuelajs.co/api/v1/products'
  const [items, setItems] = useState(null)
  const [filterItmes, setFilterItmes] = useState(null)
  // GET BY TITLES
  const [searchBytitle, setSearchBytitle] = useState(null)
  // GET BY category
  const [searchByCategory, setSearchByCategory] = useState(null)
  console.log(searchByCategory)

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

  const filterItmesByCategory = (items, searchByCategory) => {
    return items?.filter(item =>
      item.category.name.toLowerCase().includes(searchByCategory.toLowerCase()))
  }

  const filterBy = (searchType, items, searchBytitle, searchByCategory) => {
    if (searchType === 'BY_TITLE') {
      return filterItmesByTitle(items, searchBytitle)
    }
    if (searchType === 'BY_CATEGORY') {
      return filterItmesByCategory(items, searchByCategory)
    }
    if (searchType === 'BY_TITLE_AND_CATEGORY') {
      return filterItmesByCategory(items, searchByCategory).filter(item =>
        item.title.toLowerCase().includes(searchBytitle.toLowerCase()))
    }
    if (!searchType) {
      return items
    }
  }

  useEffect(() => {
    if (searchBytitle && searchByCategory) setFilterItmes(filterBy('BY_TITLE_AND_CATEGORY', items, searchBytitle, searchByCategory))
    if (searchBytitle && !searchByCategory) setFilterItmes(filterBy('BY_TITLE', items, searchBytitle, searchByCategory))
    if (searchBytitle && searchByCategory) setFilterItmes(filterBy('BY_CATEGORY', items, searchBytitle, searchByCategory))
    if (!searchBytitle && !searchByCategory) setFilterItmes(filterBy(null, items, searchBytitle, searchByCategory))
    return () => {
      setSearchBytitle(null)
    }
  }, [items, searchBytitle, searchByCategory])

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
        searchByCategory,
        setSearchByCategory,
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
