import { useEffect, useState } from 'react'
import './ItemListContainer.css'
import ItemCount from "../ItemCount/ItemCount"
import { getProducts } from '../../asyncmock'

const ItemListContainer = ({greeting = 'Hello'})=> {
    const [products, setProducts] = useState([])

    
    useEffect(() => {
        getProducts().then(products => {
            console.log(products)
            setProducts(products)
        })
    }, [])
    
    const handleOnAdd = (quantity) => {
        console.log(`Se agregaron ${quantity} productos`)
    }

    console.log(products)

    return (
        <div className="ItemListContainer">
            <h1>{greeting}</h1>
            <ItemCount stock={10} initial={2} onAdd={handleOnAdd}/>
            <ul>
                {products.map(product => {
                    return <li key={product.id}>{product.name}</li>
                })}
                
            </ul>
        </div>
    )    
    
}

export default ItemListContainer