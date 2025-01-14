import React, { useContext } from 'react'
import userContext from '../assets/context/userContext'

function Profile() {
    const {user} = useContext(userContext)

if(!user) return <div>please login bhai</div>
 return (
    <div>Welcome {user.username}</div>
  )
}

export default Profile