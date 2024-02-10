import { useState, useEffect } from 'react';
import { useLogin } from '../hooks/useLogin';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../hooks/useAuthContext';

let admin = process.env.REACT_APP_ADMIN

const AdminLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, error, isLoading } = useLogin();
  const { user } = useAuthContext();

  useEffect(() => {
   
    if ((user && user.email === admin)) {
      navigate('/admin');
    } 
  }, [user, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(email, password);
   
    // if (error === null) {
    //   navigate('/admin')
    // }
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

export default AdminLogin