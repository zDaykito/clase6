import React from 'react'
import CartWidget from './CartWidget'
import ItemListContainer from './ItemListContainer'

const Navbar = () => {
    return (
        <nav className='navmenu'>
            <a href="#">HOME</a>
            <a href="#">CLASH</a>
            <a href="#">CONTACTO</a>
            <CartWidget/>
            <ItemListContainer cantidad={4}/>
        </nav>
    )
}

export default Navbar