import React, {useState} from 'react';
import axios from 'axios';


const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = event => {
        event.preventDefault();
        console.log("hi")

        const endpoint = 'http://localhost:5000/api/auth/login';
        axios
          .post(endpoint, ({username, password}))
          .then(res => {
            console.log('LOGIN RESPONSE', res);
            localStorage.setItem('token', res.data.token);
          })
          .catch(error => {
            console.error('LOGIN ERROR', error);
          });
    }

 return (
     <form>
         <div>
         <input 
         type="text"
         value={username}
         id='username'
         placeholder='username'
         onChange={e => setUsername(e.target.value)}
         />
         </div>
         <div>
         <input 
         type="text"
         value={password}
         id='password'
         placeholder='password'
         onChange={e => setPassword(e.target.value)}
         />
         </div>
         <div>
             <button onClick={handleSubmit}>Login</button>
         </div>
     </form>
 )
}

export default Login;