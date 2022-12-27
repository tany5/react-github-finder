import React, { useContext, useEffect } from 'react'
import GithubContext from '../context/github/GithubContext'

function User() {
    const {getUser} = useContext(GithubContext)
    useEffect(()=>{
        getUser()
    }, [])
  return (
    <div>User</div>
  )
}

export default User