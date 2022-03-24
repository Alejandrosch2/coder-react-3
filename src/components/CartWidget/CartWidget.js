import './CartWidget.css'
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../Context/CartContext';




const CartWidget = () => {

    const { getCantidad} = useContext(CartContext)

    return(
        <Link to={'/cart'} className="CartWidget">
            <img src="https://i.ibb.co/F0nWfdX/carrito.webp" alt='cart' className='CartImg'/>
            {getCantidad()}
        </Link>
    );
}

export default CartWidget