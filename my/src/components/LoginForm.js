
// import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';
// import './Login.css'; // Import your CSS file

// function LoginForm() {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const history = useHistory();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Here you can handle form submission, for example, sending data to a server
//     console.log('Username:', username);
//     console.log('Password:', password);

//     // Assuming successful login, navigate to App.js
//     history.push('/app');
//   };

//   return (
//     <div className="container">
//       <form id="loginForm" onSubmit={handleSubmit}>
//         <h2>LOGIN</h2>
//         <div className="form-group">
//           <label htmlFor="username">Username:</label>
//           <input 
//             type="text" 
//             id="username" 
//             name="username" 
//             value={username} 
//             onChange={(e) => setUsername(e.target.value)} 
//             required 
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="password">Password:</label>
//           <input 
//             type="password" 
//             id="password" 
//             name="password" 
//             value={password} 
//             onChange={(e) => setPassword(e.target.value)} 
//             required 
//           />
//         </div>
//         <button type="submit" id="login">Login</button>
//       </form>
//     </div>
//   );
// }

// export default LoginForm;
