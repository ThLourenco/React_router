import React from 'react'
import { Link, NavLink } from 'react-router-dom'

import "./Navbar.css"

const Navbar = () => {
  return (
   <div>
   {/* <Link to="/">Home</Link> AQUI ESTAMOS USANDO SOMENTE O LINK
    <Link to="/contact">Contatos</Link>*/}

    {/*AQUI UTILIZAREMOS NAVLINK */}
    <NavLink to="/" className={({isActive}) => (isActive ? "active" : "")}>Home</NavLink>
    <NavLink to="/contact" className={({isActive}) => (isActive ? "active" : "")}>Contato</NavLink>
   </div>
  )
}


export default Navbar