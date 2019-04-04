import React, {useState} from 'react';
import axios from 'axios';


const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = event => {
        event.preventDefault();
        console.log("hi")
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