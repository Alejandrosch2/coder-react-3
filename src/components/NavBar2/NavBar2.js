import './NavBar2.css'
import CartWidget from '../CartWidget/CartWidget'
import { NavLink } from 'react-router-dom'


const NavBar2 = () => { 


  return (
      <nav className="NavBar" >
        <div>
            <h3>Tienda Online</h3>
        </div>
        <div className="Categories">
           <NavLink
            to={'/category/estrategia'}
            className={({ isActive }) =>
              isActive ? 'ActiveOption' : 'Option'
            }
          >
            Estrategia
          </NavLink>
            
          <NavLink
            to={'/category/horror'}
            className={({ isActive }) =>
              isActive ? 'ActiveOption' : 'Option'
            }
          >
            Horror
          </NavLink>
          <NavLink
            to={'/category/accion'}
            className={({ isActive }) =>
              isActive ? 'ActiveOption' : 'Option'
            }
          >
            Accion
          </NavLink>
        </div>
        <CartWidget/>
      </nav>
  )
}

export default NavBar2