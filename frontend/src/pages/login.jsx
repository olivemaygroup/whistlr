import { useState } from 'react';
import { useLogin } from '../hooks/useLogin';
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, error, isLoading } = useLogin();


  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(email, password);

    if (error === null ) {
      navigate('/mycases');
    } 
    
  };

    return (
    <form className="small"
    onSubmit={handleSubmit}>
      <h2>Login</h2>
      <div className="items">
        <label>Email:</label>
        <input 
          type='email'
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}/>
        <label>Password:</label>
        <input 
        type='password'
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}/>
      </div>
      <button disabled={isLoading}><h3>login</h3></button>
      {error && <div className='error'>{error}</div>}
    </form>
  )
}

export default Login