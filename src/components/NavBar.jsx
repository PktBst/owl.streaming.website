import React from 'react'
import { Link } from 'react-router-dom'
import owlSymbol from './media/owl-symbol.svg'
import './styles/navbar.css'

export default function NavBar() {
  return (
    <div className="navbar">
      <Link to='/'  style={{ textDecoration: 'none', color: 'inherit' }}>
        <div className="symbol">
          <img className='owl-symbol' src={owlSymbol} alt="" />wl
        </div>
      </Link>
    </div>
  )
}
