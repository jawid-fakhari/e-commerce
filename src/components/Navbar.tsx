import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='h-8 border-b shadow flex gap-7'>
      <ul className='flex '>
        <li><Link to="/"/>Home</li>
        <li><Link to="/store"/>Shop</li>
      </ul>

      <div>
        <button>Sopping cart</button>
      </div>
    </div>
  )
}

export default Navbar