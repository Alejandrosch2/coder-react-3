import React, { useState } from 'react';
import './ItemCount.css'

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
                <tbody>
                <tr>
                <td><button onClick={ substract}>-</button></td>
               <td><p>{number}</p></td>
                <td><button onClick={add}>+</button></td>
                </tr>
                </tbody>
            </table>
            
            <div className='Button1'>
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