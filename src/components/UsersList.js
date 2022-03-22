import React from 'react';

const UsersList = ({users, selectUser,deleteUser}) => {
    return (
        <ul>
            {users.map(user=>(
                <li key={user.id}>
                     <h4> {user.first_name} {user.last_name}</h4>
                     <p>{user.email}</p>
                     <p>{user.birthday}</p>
                     <button onClick={()=>selectUser(user)}>Seleccionar</button>
                     <button onClick={()=>deleteUser(user.id)}>Eliminar</button> 
                </li>
            ))}
            
        </ul>
    );
};

export default UsersList;