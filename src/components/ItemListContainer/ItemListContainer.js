import { useEffect, useState } from 'react'
import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList'
import { getProducts } from '../../asyncmock'
import { useParams } from 'react-router-dom'

const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const { categoryId } = useParams()


          useEffect(() => {
            setLoading(true)
    
            getProducts(categoryId).then(item => {
                setProducts(item)
            }).catch(err  => {
                console.log(err)
            }).finally(() => {
                setLoading(false)
            })
    
            return (() => {
                setProducts()
            })          
        }, [categoryId])
        
        return (
            <div className="ItemListContainer">
                {
                    loading ? 
                        <h1>Cargando...</h1> :  
                    products.length ? 
                        <ItemList products={products}/> : 
                        <h1>No se encontraron productos!</h1>
                }
            </div>
        )    
        
    }
    
  
export default ItemListContainer
                           
                    
                 
                    
                    
                            
                


