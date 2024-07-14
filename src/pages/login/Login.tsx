import React from 'react'
import Container from '../../components/container/Container'
import { useShoppingCartContext } from '../../context/ShoppingCartContext'

function Login() {
    const {handleLogin} = useShoppingCartContext();
  return (
    <div>
        <Container>
            <div className='bg-slate-300 p12 rounded'>
                <input type="text" placeholder='username' />
                <input type="password" placeholder='password' />
                <button onClick={handleLogin}>Login</button>
            </div>
        </Container>
    </div>
  )
}

export default Login