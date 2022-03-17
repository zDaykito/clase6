import React from 'react'

const Contador = () => {
    return (
        <div>
            <h1>MI CARRITO</h1>
            <h2>Polera Hombre Negra</h2>
            <div className='cantidad'>
                <button className='botonSuma' onClick={handleRestar}>-</button>
                <p>{estado} Producto/s</p>
                <button className='botonResta' onClick={handleSumar}>+</button>
            </div>
        </div>
    )
}

export default Contador