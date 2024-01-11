
const Login = () => {
  return (
    <form className="small">
      <h2>Login</h2>
      <div className="items">
        <label>Email:</label>
        <input 
          type='email'
          placeholder="email"></input>
        <label>Password:</label>
        <input 
        type='password'
        placeholder="password"></input>
      </div>
      <button><h3>login</h3></button>
    </form>
  )
}

export default Login