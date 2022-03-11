import React, { useState } from 'react';


const ItemCount = ({ stock, onAdd }) => {
    const [number, setNumber] = useState(0);

    const add = () => {
        number < stock && setNumber(number + 1);
    };

    const substract = () => {
        number > 0 && setNumber(number - 1);
    };
   
    return (
        <div className="container-buton">
            <table className="container-add-substract">
                <tr>
                <td><button onClick={ substract}>-</button></td>
               <td><p>{number}</p></td>
                <td><button onClick={add}>+</button></td>
                </tr>
            </table>
            <div>
                <button
                    disabled={number === 0}
                    className={number === 0 ? 'disabled' : 'add'}
                    onClick={() => onAdd(number)}
                >
                    Agregar al carrito
                </button>
            </div>
        </div>
    );
};

export default ItemCount