import React from 'react';
import { useSelector } from 'react-redux';
import "../App.css"

const Dashboard  = () => {
    const user = useSelector(state=>state.authReducer.user)

  return (
    <div className='dashbor'>
       {user?(
        <>
         <h2 className='dash' >User Details </h2>
        <h4>  Name:{user.name} </h4>
        <h4> LastName:{user.lastName} </h4>
        <h4> Email:{user.email} </h4>
        </>
       ):(<></>)}

    </div>
  )
}

export default Dashboard