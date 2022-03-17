import React from 'react'
import { useState, useEffect } from 'react'

let productosIniciales = [
    {
        id: 1,
        nombre: "Producto 1",
        precio: 100
    },
    {
        id: 2,
        nombre: "Producto 2",
        precio: 200
    },
    {
        id: 3,
        nombre: "Producto 3",
        precio: 300
    }
]

const ItemCount = () => {

        //CONTADOR

    const stock = 20

    const[estado, setEstado] = useState(0)

    const handleSumar = () => {
        if(estado < stock) {
            setEstado(estado + 1)
        }
    }

    const handleRestar = () => {
        if(estado > 1) {
            setEstado(estado - 1)
        }
    }

    //TOGGLE

    const [loading, setLoading] = useState(true)
    const [productos, setProductos] = useState([])

    useEffect(() => {
        console.log("Ejecutando useEffect")

        const pedido = new Promise((res,rej) => {
            setTimeout(() => {
                res(productosIniciales)
            },5000) 
        })

        pedido
        .then((resultado) => {
            console.log("Estuvo Bien")
            setProductos(resultado)
        })
        .catch((error) => {
            console.log("Estuvo Mal")
        })

    },[])

    console.log(productos)

    return (
        <div id='containerCart'>
        <h1>MI CARRITO</h1>
        <h2>Polera Hombre</h2>
        <div className='cantidad'>
            <button className='botonSuma' onClick={handleRestar}>-</button>
            <p>{estado} Producto/s</p>
            <button className='botonResta' onClick={handleSumar}>+</button>
        </div>
        <button onClick={() => setLoading(!loading)}>Toggle</button>
        <ul>
            {productos.map((producto) => {
                return <li key={producto.id}>{producto.nombre}</li>
            })}
        </ul>
    </div>
    )
}

export default ItemCount