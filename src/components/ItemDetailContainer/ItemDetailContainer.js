import './ItemDetailContainer.css'
import { useState, useEffect } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { getProduct } from '../../asyncmock'
import { useParams } from 'react-router-dom'
import { getDoc, doc } from 'firebase/firestore'
import { firestoreDb } from  '../../services/firebase/firebase'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState()
    const { productId } = useParams()
    const [loading, setLoading] = useState(true)
    

    useEffect(() => {
        setLoading(true)
        
        const docRef = doc(firestoreDb, 'products', productId)

        getDoc(docRef).then(Response => {

            const product = {id: Response.id, ...Response.data()}
            setProduct(product)
        }).finally(() => {
            setLoading(false)
        })

        return (() => {
            setProduct()
        })

    }, [productId])


    return (
        <div className="ItemDetailContainer" >
            <ItemDetail {...product}/>
        </div>
    )    
}
export default ItemDetailContainer