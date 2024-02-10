// React imports
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext.jsx';


// Pages imports
import NavBar from './components/NavBar.jsx'
import Home from './pages/home.jsx'
import Login from "./pages/login.jsx";
import Signup from './pages/signup.jsx'
import MyCases from "./pages/mycases.jsx";
import AddCase from './components/AddCase.jsx'
import CreateIncident from './components/CreateIncident.jsx';
import AddProfile from './components/AddProfile.jsx';
import MyProfile from './components/MyProfile.jsx';
import AdminPage from './pages/admin.jsx';
import AdminLogin from './pages/adminLogin.jsx';

let admin = process.env.REACT_APP_ADMIN

function App() {

  const { user } = useAuthContext()
  
  return (
    <div className="App">
    <BrowserRouter>
    <NavBar />
    <div className='pages'>
      { user && (user.email === admin) && (
        <Routes>
          <Route 
          path='/admin'
          element={<AdminPage />}
          />
      </Routes>
        )}
      <Routes>
        { user ? (
          <>
          <Route
          path='/'
          element= {<Home />} 
          /> 
          <Route
          path='/mycases'
          element={<MyCases />}
          />
          <Route 
          path='/addcase'
          element={<AddCase />}
          />
          <Route 
          path='/addincident/:caseId'
          element={<CreateIncident />}
          />
          <Route 
          path='/addprofile'
          element={<AddProfile />}
          />
           <Route 
          path='/myprofile'
          element={<MyProfile />}
          />
          </>

        ) : (
          <>
          <Route
          path='/'
          element={<Home />}
          />
          <Route
          path='/login'
          element={<Login />}
          />
          <Route
          path='/signup'
          element={<Signup />}
          />
          <Route 
          path='/admin/login'
          element={<AdminLogin />}
          />
          <Route 
          path='/mycases'
          element={<Login />}
          />
          </>
          )}
      </Routes>
    </div>
    </BrowserRouter>

    </div>
  );
}

export default App;
