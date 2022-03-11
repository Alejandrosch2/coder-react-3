import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({children}) => {

    const [cart, setCart] = useState([]);

    const addToCart = (item, cantidad) => {

        isInCart(item.id)
        ? sumarCantidad(item, cantidad)

        : setCart([...cart,{...item, cantidad}]);
    }


    console.log(cart);

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
    };

    return (


        <CartContext.Provider value={{ cart, addToCart}}>
                {children}
        </CartContext.Provider>

    );

 
};

 
