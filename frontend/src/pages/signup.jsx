
const Signup = () => {
  return (
    <form className="small">
      <h2>Signup</h2>
      <p><strong>Please sign up with a private email address</strong></p>
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
      <button><h3>signup</h3></button>
    </form>
  )
}

export default Signup