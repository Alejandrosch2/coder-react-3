import './NavBar2.css'
import Button from '../Button/Button'
import CartWidget from '../CartWidget/CartWidget'


const NavBar2 = ({ title }) => { //{ title: 'ecommerce ', color='red'}
  // const { title, color } = props 
  const handleEstrategia = () => {
    console.log('Estrategia')
  }

  const handleHorror = () => {
    console.log('Horror')
  }

  const handleAccion = () => {
    console.log('Accion')
  }

  return (
      <nav className="NavBar" >
        <div>
            <h3>{title}</h3>
        </div>
        <div className="Categories">
          <Button handleClick={handleEstrategia}>
            Estrategia
          </Button>
          <Button handleClick={handleHorror} backgroundColor='black' colorText='crimson' >
            Horror
          </Button>
          <Button handleClick={handleAccion}>
            Accion
          </Button>
        </div>
        <CartWidget/>
      </nav>
  )
}

export default NavBar2