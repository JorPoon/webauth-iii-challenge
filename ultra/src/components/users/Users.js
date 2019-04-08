import React, {useState, useEffect} from 'react';
import axios from 'axios';
import requiresAuth from './requiresAuth'


const Users = () => {
    const [data, setData] = useState({users: []});
    useEffect(() => {
        const fetchUsers = async () => {
            const result = await axios.get(
                'http://localhost:5000/api/users',
            );
            setData({users: result.data})
        };
        fetchUsers();
    },[]);

    return (
        <>
        <h2>Lists of Users</h2>
        <ul>
        {data.users.map(u => (
            <li key={u.id}>{u.username}</li>
          ))}
        </ul>
        </>
    )
}


export default requiresAuth(Users);