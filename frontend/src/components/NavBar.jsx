import { Link } from 'react-router-dom'
import { useAuthContext } from '../hooks/useAuthContext';
import { useLogout } from '../hooks/useLogout.jsx'
import { useNavigate } from 'react-router-dom';

let admin = process.env.REACT_APP_ADMIN

const NavBar = () => {
  const navigate = useNavigate()
  const { logout } = useLogout()
  const { user } = useAuthContext()


  const handleClick = () => {
    logout()
    navigate('/')
  }


    return (
      <nav>
        <div className="container">
          <Link to='/'>
            <h1>whistlr.</h1>
          </Link>
          <div>
            {user && (
              <div className='signed-in'>
                <Link to='/myprofile'><p>Profile</p></Link>
                {user.email === admin && (<Link to='/admin'><p>admin</p></Link>)}
                {user.email !== admin && (<Link to='/mycases'><p>My cases</p></Link>)}
                <button onClick={handleClick}><h3>Logout</h3></button>
              </div>
            )}
            {!user && (
              <div className="signup">
                <Link to='/login'><h3>Login</h3></Link>
                <Link to='/signup'><button><h3>Signup</h3></button></Link>
              </div>
            )}
          </div>
        </div>
        <hr></hr>
      </nav>
    );
    
};

export default NavBar;
