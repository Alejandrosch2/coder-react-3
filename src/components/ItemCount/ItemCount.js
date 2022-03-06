import { useState } from 'react'

   const ItemCount = ({ onAdd, stock, initial = 0 }) => {
    const [count, setCount] = useState(initial)

    const increment = () => {
        if(count < stock) {
            setCount(count + 1)
        }
    }

    const decrement = () => {
        if(count > initial) {
            setCount(count - 1)
        }
    }

    return (
        <div>
            <p>{count}</p>
            <button onClick={decrement}>-</button>
            <button onClick={increment}>+</button>
            <button onClick={(e) => onAdd(count)}>Agregar al carrito</button>
        </div>
    )
}


export default ItemCount
