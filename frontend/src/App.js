import AddProfile from "./components/AddProfile.jsx";
import CaseOverview from "./components/CaseOverview.jsx";
import CreateCase from "./components/CreateCase.jsx";
import CreateIncident from "./components/CreateIncident.jsx";
import IncidentOverview from "./components/IncidentOverview.jsx";
import NavBar from "./components/NavBar"
import AdminPage from "./pages/admin.jsx";
import Home from './pages/home.jsx'
import Login from "./pages/login.jsx";
import Signup from './pages/signup.jsx'
import UserCases from "./pages/userCases.jsx";

function App() {
  return (
    <div className="App">
    <NavBar />
    <Home />
    <Signup />
    <AddProfile />
    <Login />
    <CreateCase />
    <CreateIncident />
    <UserCases />
    <CaseOverview />
    <IncidentOverview />

    </div>
  );
}

export default App;
