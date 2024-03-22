import React, { useContext } from 'react'
import { AuthContext } from '../auth'
import { Navigate } from 'react-router-dom'

export const PublicRoute = ({children}) => {
    const {logged} = useContext(AuthContext)
    // console.log("hola private")
  return (logged)?<Navigate to="/" />:children
}
// "test": "jest --watchAll"