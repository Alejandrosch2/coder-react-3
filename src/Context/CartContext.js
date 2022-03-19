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

/*
        isInCart(item.id)
        ? sumarCantidad(item, cantidad)
        : setCart([...cart,{...item, cantidad}])
        ? sumarPrecio( price)
        : setCart([...cart,{...item, cantidad, price}])
    }*/  


  /*  console.log(cart);

    const isInCart = (id) => {
        return cart.some((producto) => producto.id === id);
    };

    const sumarCantidad = (item, cantidad) => {
        const newProducts = cart.map((prod) => {
            if (prod.id === item.id) {
                const newProduct = {
                    ...prod,
                    cantidad: prod.cantidad + cantidad,
                };
                return newProduct;
            } else {
                return prod;
            }
        });
        setCart(newProducts);
    };*/

    /*const sumarPrecio = (item, cantidad, price) => {
        const newProducts = cart.map((prod) => {
            if (prod.id === item.id) {
                const newProduct = {
                    ...prod,
                    price: prod.price + price*cantidad
                };
                return newProduct;
            } else {
                return prod;
            }
        });
        setCart(newProducts);
    };*/


    

    /*const sumarPrecio = (price) => {

        const newPrice = cart.map((prod) => {
            if(prod.cantidad === 1 ) {

                return prod;
            }else {
                const newPrices = {
                    ...prod,
                    price: prod.price + price*prod.cantidad
                };
                return newPrices;
            }

        });
        setCart(newPrice);
    };*/


 
