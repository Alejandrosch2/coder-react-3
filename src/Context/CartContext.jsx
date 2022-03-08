import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({children}) => {

    const [cart, setCart] = useState([]);

    const addToCart = (item, cantidad) => {
        
       setCart([...cart,{...item, cantidad}]);
    }


    console.log(cart);

    return (


        <CartContext.Provider value={{ cart, addToCart}}>
                {children}
        </CartContext.Provider>

    );

 
};

 
