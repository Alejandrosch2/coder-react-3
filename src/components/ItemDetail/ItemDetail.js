import './ItemDetail.css'
import { useContext, useState } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'
import { CartContext } from '../../Context/CartContext'
import { useNotificationServices } from '../../services/NotificationServices/NotificationServices'

const ItemDetail = ({ id, name, category, price, img, description, stock }) => {

    const [ quantity, setQuantity] = useState(0)
    const {addItem} = useContext(CartContext)
    const setNotification = useNotificationServices()
    

    const onAdd = (quantity) =>{
         setQuantity(quantity);


         const productToAdd = {
            id,
            name,
            price,
            img,
            category,
            description,
            stock
        }

         addItem(productToAdd, quantity );
         setNotification('succes',`se agrego ${name} al carrito` )
    }

    return (
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader" id={id}>
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className="ItemImg"/>
            </picture>
            <section>
                <p className="Info">
                    Categoria: {category}
                </p>
                <p className="Info">
                    Descripción: {description}
                </p>
                <p className="Info">
                    Precio: $ {price}
                </p>
            </section>           
            <footer className='ItemFooter'>
                {   quantity === 0 ? (

                    <ItemCount  stock={stock}   onAdd={onAdd}  />
                ): (
                    <>
                        <Link to="/cart" style={{margin: "5px"}} >ir al carrito</Link>
                    </>
                )}
                
                
            </footer>
            
        </article>
    )
}

export default ItemDetail