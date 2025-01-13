import React from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
  const data = useLoaderData()
  return (
    <div className='bg-gray-700 text-white mx-auto p-5 text-center text-3xl'>
      <img src={data.avatar_url} alt="" />
      
      public reposs are : {data.public_repos}
      
      </div>
  )
}

export default Github