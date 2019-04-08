import React, {useState} from 'react';
import axios from 'axios';

const Register = ({history}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    // make axios post call when login button is clicked
    const handleSubmit = event => {
        //prevents reloading
        event.preventDefault();

        const endpoint = 'http://localhost:5000/api/auth/register';
        axios
          .post(endpoint, ({username, password}))
          .then(res => {
            console.log('REGISTER RESPONSE', res);
            localStorage.setItem('token', res.data.token);
          })
          .catch(error => {
            console.error('REGISTER ERROR', error);
          });
        history.push('/users')
    }
 return (
     //username and password input
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
             <button onClick={handleSubmit}>Register</button>
         </div>
     </form>
 )
}

export default Register;