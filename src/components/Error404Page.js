import React from 'react'
import { NavLink } from 'react-router-dom'

function Error404Page() {
  return (
    <div className='text-center'>
        <h1 className='text-danger my-5'>Error Page not found</h1>
        <NavLink to='/'>Go to Home Page</NavLink>
    </div>
  )
}

export default Error404Page