import axios from 'axios';
import React, { useEffect, useState } from 'react';

const UsersForm = ({userSelected, getUsers, setUserSelected}) => {
    
    const [name, setName] = useState("")    
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")
    const [birthday, setBirthday] = useState("")

    useEffect(() => {
      if(userSelected){
        setName(userSelected.first_name)
        setLastName(userSelected.last_name)
        setEmail(userSelected.email)
        setPass(userSelected.password)
        setBirthday(userSelected.birthday)
      }
    }, [userSelected])
    

    const submit= (e)=>{
        e.preventDefault();
        const user={
            first_name:name,
            last_name:lastName,
            email,
            birthday,
            password:pass,
        }

        if(userSelected){
        
            axios.put(`https://users-crud1.herokuapp.com/users/${userSelected.id}/`,user)
            .then(()=> {
                getUsers();
                reset();
            })
            
        }else{
        axios.post(`https://users-crud1.herokuapp.com/users/`,user)
        .then(()=>
            getUsers(),
            reset()
           
        )
        }
    }
    
    const reset=()=>{
        setUserSelected(null);
        setName('');
        setLastName('');
        setEmail('');
        setPass('');
        setBirthday('');
    }

   

    return (
        <form onSubmit={submit}>
            <h1>Lista de usuarios</h1>

            <div className='formitem'>
            <label htmlFor="name">Nombre</label>
            <input type="text" id='name' value={name} onChange={e=> setName(e.target.value)} />
            </div>
                
            <div className='formitem'>
            <label htmlFor="last_name">Apellido</label>
            <input type="text" id='last_name' value={lastName} onChange={e=> setLastName(e.target.value)} />
            </div>

            <div className='formitem'>
            <label htmlFor="email">Email</label>
            <input type="email" id='email' value={email} onChange={e=> setEmail(e.target.value)} />
            </div>

            <div className='formitem'>
            <label htmlFor="birthday">Fecha de nacimiento</label>
            <input type="date" id='birthday' value={birthday} onChange={e=> setBirthday(e.target.value)} />
            </div>

            <div className='formitem'>
            <label htmlFor="password">Contraseña</label>
            <input type="password" id='password' value={pass} onChange={e=> setPass(e.target.value)} />
            </div>

            <button>Agregar</button>
            <button onClick={()=>reset()} type='button'>Deseleccionar</button>
            


            


            
        </form>
    );
};

export default UsersForm;