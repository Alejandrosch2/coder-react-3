import './ItemDetailContainer.css'
import { useState, useEffect } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import { getProductById } from  '../../services/firebase/firebase'
import { useNotificationServices } from '../../services/NotificationServices/NotificationServices'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState()
    const { productId } = useParams()
    const [loading, setLoading] = useState(true)

    const setNotification = useNotificationServices()
    

    useEffect(() => {
        setLoading(true)
        
        getProductById(productId).then(Response => {
            setProduct(Response)
        }).catch((error) => {
            setNotification('error',`Error buscando producto:  ${error} ` )
        }).finally(() => {
            setLoading(false)
        })

        return (() => {
            setProduct()
        })

    }, [productId])


    return (
        <div className="ItemDetailContainer" >
            {
                loading ?
                        <h1>cargando...</h1> :
                        product ?
                 <ItemDetail {...product}/>:
                 <h1>el producto no existe</h1>
            }
           
        </div>
    )    
}
export default ItemDetailContainer