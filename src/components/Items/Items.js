import './Items.css'
import { Link } from 'react-router-dom'




const Items = ({product}) => {
   
    return (
            <container className="CardItem">
         
                <header className="Header">
                    <h2 className="ItemHeader">
                         {product.name}
                     </h2>
                </header>
                <picture  >
                 <img src={product.img} alt={product.name} className="ItemImg"/>
                </picture>
                <section>
                 <p className="Info">
                     Precio: ${product.price}
                 </p>
                </section>           
            <footer className='ItemFooter'>
                <Link to={`/detail/${product.id}`}>description</Link>
             </footer>

            </container>

    )
}

export default Items




