import './ItemList.css'
import Items from "../Items/Items"

const ItemList = ({ products }) => {

    return (
        <ul className="ListGroup">
            {products.map(product => <Items key={product.id} product={product}/>)}
        </ul>
    )
}

export default ItemList