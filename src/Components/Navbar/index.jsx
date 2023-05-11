import { NavLink } from "react-router-dom"

function Navbar() {
  const activeStyle = 'underline underline-offset-4'
  return (
    <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-4 px-8 text-lg font-light bg-slate-50/90">
      <ul className="flex items-center gap-3">
        <li className="font-semibold text-2xl">
          <NavLink
            to="/"
          >
            Banji
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/todo"
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
          >
            Todo
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Camisas"
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
          >
            Camisas
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Pantalones"
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
          >
            Pantalones
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Hombre"
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
          >
            Hombre
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Mujer"
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
          >

            Mujer
          </NavLink>
        </li>
      </ul>
      {/* seg navigate */}
      <ul className="flex items-center gap-3">
        <li>
          <NavLink to="/MyOrders"
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
          >
            Mis pedidos
          </NavLink>
        </li>
        <li>
          <NavLink to="/MyAccount"
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
          >
            Mi Cuenta
          </NavLink>
        </li>
        <li>
          <NavLink to="/SingIn"
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
          >
            Sign in
          </NavLink>
        </li>
        <li>
          <NavLink to="/sell"
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
          >
            🛒 1
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar