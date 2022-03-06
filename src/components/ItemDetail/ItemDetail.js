import './ItemDetail.css'
import { useState } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'


const ItemDetail = ({ product }) => {

    const [ cantidad, setCantidad] = useState(0)

    const onAdd = (stock) =>{
         setCantidad(stock)
    }

    return (
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader">
                    {product?.name}
                </h2>
            </header>
            <picture>
                <img src={product?.img} alt={product?.name} className="ItemImg"/>
            </picture>
            <section>
                <p className="Info">
                    Categoria: {product?.category}
                </p>
                <p className="Info">
                    Descripción: {product?.description}
                </p>
                <p className="Info">
                    Precio: {product?.price}
                </p>
            </section>           
            <footer className='ItemFooter'>
                {   cantidad === 0 ? (

                    <ItemCount  stock={product?.stock}   onAdd={onAdd}  />
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