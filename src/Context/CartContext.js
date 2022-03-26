import { createContext, useState } from "react";



export const CartContext = createContext();

export const CartContextProvider = ({children}) => {

    const [products, setProducts] = useState([]);

    const addItem = (item, quantity) => {

    const productToAdd = {
        ...item,
        quantity
    } 

    isInCart(item.id) ? updateItemInCart(productToAdd) : addItemToCart(productToAdd) 
}

const isInCart = (id) => {
    return products.some(prod => prod.id === id)
}

const updateItemInCart = (productToAdd) => {
    const updatedCart = products.map(prod => {
        if(prod.id === productToAdd.id) {
            const updatedProduct = {
                ...prod,
                quantity: prod.quantity + productToAdd.quantity
            }
            return updatedProduct
        } else {
            return prod
        }
    })

    setProducts(updatedCart)
}

const addItemToCart = (productToAdd) => {
    setProducts([...products, productToAdd])
}


    const removeItem = (id) => {
        const newProducts = products.filter(prod => prod.id !== id)
        setProducts(newProducts)
    }

    const clearCart = () => {
        setProducts([])
    }

    const getTotal = () => {
        let total = 0
        products.forEach(prod => {
            total = total + prod.price * prod.quantity 
        })
        return total
    }



    const getCantidad = () => {
        let count = 0
        products.forEach(prod => {
            count = count + prod.quantity
        })
        return count
    }

    console.log(products)

    return (


        <CartContext.Provider value={{ products, addItem,  getTotal, clearCart, removeItem, addItemToCart, getCantidad}}>
                {children}
        </CartContext.Provider>

    );

 
};

