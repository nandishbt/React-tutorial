import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
   const{id} = useParams()
  return (
    <div className='bg-gray-700 text-white mx-auto p-5 text-center text-3xl'>User is {id}</div>
  )
}

export default User