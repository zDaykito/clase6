// Necesitamos la variable React en scope

import React from 'react'
import ReactDOM from 'react-dom'

// Necesitamos un componente en scope (funcion)

import App from './App'
import "./style.css"

// Necesitamos poner el componente en el DOM

ReactDOM.render(<App/>, document.getElementById("root"))