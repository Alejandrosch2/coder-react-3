import React, { useContext } from 'react';


const Cart = () => {
    const { cart } = useContext();

    return (
        <>
            {cart.map((prod) => (
                <li key={prod.id}>{prod.cantidad}</li>
                
            ))}
        </>
    );
};

export default Cart;