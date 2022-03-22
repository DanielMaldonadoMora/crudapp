import React from 'react';

const UsersList = ({users, selectUser,deleteUser}) => {
    return (
        <ul>
            {users.map(user=>(
                <li key={user.id}>
                    <h4> {user.first_name} {user.last_name}</h4>
                     <p> <b>Email:</b> {user.email}</p>
                     <p> <b>Cumpleaños:</b> {user.birthday}</p>
                     <div className='libutons'>
                        <button onClick={()=>selectUser(user)}>Seleccionar</button>
                        <button className='delete' onClick={()=>deleteUser(user.id)}>X</button> 
                     </div>
                </li>
            ))}
            
        </ul>
    );
};

export default UsersList;