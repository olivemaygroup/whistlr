import { useState } from "react"
import { useSignup } from "../hooks/useSignup";
import { useNavigate } from "react-router-dom";

const Signup = () => {

  const navigate = useNavigate()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {signup, error, isLoading} = useSignup()

  const handleSubmit = async(e) => {
    e.preventDefault()
    await signup(email, password)
    navigate('/addprofile')
  }

  return (
    <form className="small" onSubmit={handleSubmit}>
      <h2>Signup</h2>
      <p><strong>Please sign up with a private email address</strong></p>
      <div className="items">
        <label>Email:</label>
        <input 
          type='email'
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}></input>
        <label>Password:</label>
        <input 
        type='password'
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}></input>
      </div>
      <button disabled={isLoading} ><h3>signup</h3></button>
      {error && <div className="error">{error}</div>}
    </form>
  )
}

export default Signup