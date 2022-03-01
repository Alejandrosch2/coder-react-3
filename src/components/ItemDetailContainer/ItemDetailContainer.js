import './ItemDetailContainer.css'
import { useState, useEffect } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { getProduct } from '../../asyncmock'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState()
    const [loading, setLoading] = useState(true)
    
    const { productId } = useParams()
    

    useEffect(() => {
        getProduct(productId).then(item => {
            setProduct(item)
        }).catch(err  => {
            console.log(err)
        }).finally(() =>{
            setLoading(false)
        } )

        return (() => {
            setProduct()
        })

    }, [productId])


    return (
        <div className="ItemDetailContainer" >
           
            {
                loading ?
                    <h1> Cargando....  </h1>:

                    <ItemDetail  product={product}/>
            }
        </div>
    )    
}
export default ItemDetailContainer