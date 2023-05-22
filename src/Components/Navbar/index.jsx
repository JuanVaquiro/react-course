import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { ShoppingBagIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../Context'

function Navbar () {
  const { count, setSearchByCategory } = useContext(ShoppingCartContext)
  const activeStyle = 'underline underline-offset-4'
  return (
    <nav className='flex justify-between items-center fixed z-10 top-0 w-full py-4 px-8 text-lg font-light bg-slate-50/90'>
      <ul className='flex items-center gap-3'>
        <li className='font-semibold text-2xl'>
          <NavLink
            to='/'
          >
            Banji
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/'
            className={({ isActive }) =>
              isActive ? activeStyle : undefined}
          >
            All
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/Electronics'
            className={({ isActive }) =>
              isActive ? activeStyle : undefined}
            onClick={() => { setSearchByCategory('Electronics') }}
          >
            Electronics
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/Clothes'
            className={({ isActive }) =>
              isActive ? activeStyle : undefined}
            onClick={() => { setSearchByCategory('Clothes') }}
          >
            Clothes
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/Others'
            className={({ isActive }) =>
              isActive ? activeStyle : undefined}
            onClick={() => { setSearchByCategory('Others') }}
          >
            Others
          </NavLink>
        </li>

      </ul>
      {/* seg navigate */}
      <ul className='flex items-center gap-3'>
        <li>
          <NavLink
            to='/MyOrders'
            className={({ isActive }) =>
              isActive ? activeStyle : undefined}
          >
            My Orders
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/MyAccount'
            className={({ isActive }) =>
              isActive ? activeStyle : undefined}
          >
            My Account
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/SingIn'
            className={({ isActive }) =>
              isActive ? activeStyle : undefined}
          >
            Sign in
          </NavLink>
        </li>
        <li className='flex gap-1 items-center justify-center'>
          <ShoppingBagIcon className='w-6 h-6' />
          <div>
            {count}
          </div>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
