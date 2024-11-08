import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({children}) => {
  //const navigate = useNavigate()
  const cartItems = useSelector(state => state.cartItems.cart)
  return cartItems.length > 0 ? children : <Navigate to='/'/>
}

export default ProtectedRoute