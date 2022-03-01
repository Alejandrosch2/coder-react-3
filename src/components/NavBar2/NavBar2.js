import './NavBar2.css'
import CartWidget from '../CartWidget/CartWidget'
import { NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getCategories } from '../../asyncmock'
import { Link } from 'react-router-dom'

const NavBar2 = () => { 
  const [categories, setCategories] = useState([])
  
  useEffect(() => {
    getCategories().then(categories => {
      setCategories(categories)
    })
  }, [])

  return (
      <nav className="NavBar" >
        <div>
         <Link to={`/`}> tienda Online </Link> 
        </div>
        <div className="Categories">
          {categories.map(cat => <NavLink key={cat.id} to={`/category/${cat.id}`} className={({ isActive }) =>
              isActive ? 'ActiveOption' : 'Option'
            }>{cat.description}</NavLink>)}
        </div>
        <CartWidget />
      </nav>
  )
}

export default NavBar2