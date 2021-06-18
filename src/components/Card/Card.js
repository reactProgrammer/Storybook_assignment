import React from 'react';
import { useFetch } from '../../hooks/useFetch';
import './Card.css';

export const UserCard = ({ id }) => {
  const { data, loading, error, refetch } = useFetch(
    `http://localhost:3337/users`,
  )
  return(
       <>
        {
           data && data.map((user)=>{
            return( 
            <div className="container">
                <div className="avatar-container">
                   {user.avatar_url && <img className="avatar" src={user.avatar_url} alt="" />}
                </div>  
                <div className="userInfo">
                   <h1>{user.username}</h1>  is best
                   <span>{user.email}</span>
                   <p>{user.param}</p>
                </div>    
            </div>
            )
           })
        }
       </> 
  )
}

