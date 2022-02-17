import './CartWidget.css'
const CartWidget = () => {
    return(
        <button className="CartWidget">
            <img src="https://i.ibb.co/F0nWfdX/carrito.webp" alt='cart' className='CartImg'/>
            0
        </button>
    );
}

export default CartWidget