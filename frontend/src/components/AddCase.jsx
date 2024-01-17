import { useState } from "react"
import { useMycasesContext } from '../hooks/useMyCasesContext.jsx'
import { useAuthContext } from '../hooks/useAuthContext.jsx'
import { useNavigate } from "react-router-dom"


const CreateCase = () => {

  const navigate = useNavigate()
  const { dispatch } = useMycasesContext()
  const { user } = useAuthContext()

  const [firstName, SetFirstName] = useState('')
  const [surname, SetSurname] = useState('')
  const [gender, Setgender] = useState('')
  const [age, SetAge] = useState('')
  const [email, SetEmail] = useState('')
  const [linkedIn, SetLinkedIn] = useState('')
  const [maritalStatus, SetMaritalStatus] = useState('')
  const [seniority, SetSeniority] = useState('')
  const [grade, SetGrade] = useState('')
  const [department, SetDepartment] = useState('')
  const [influence, SetInfluence] = useState('')
  const [frequency, SetFrequency] = useState('')
  const [projects, SetProjects] = useState('')
  const [travel, SetTravel] = useState('')
  const [outsideContact, SetOutsideContact] = useState('')
  const [feelSafe, SetFeelSafe] = useState('')
  const [level, SetLevel] = useState('')
  const [reported, SetReported] = useState(false)
  const [error, SetError] = useState(null)
  const [emptyFields, SetEmptyFields] = useState([])

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!user) {
      SetError('You must be logged in')
      return
    }

    const newCase = { 
      firstName,
      surname,
      gender,
      age,
      email,
      linkedIn, 
      maritalStatus,
      seniority,
      grade,
      department,
      influence,
      frequency,
      projects,
      travel,
      outsideContact,
      feelSafe,
      level,
      reported
    }
try {

  const response = await fetch ('http://localhost:3003/case/create',{
    method: 'POST',
    mode: 'cors',
    body: JSON.stringify(newCase),
    headers: {
      'content-type': 'application/json',
      'Authorization': `Bearer ${user.token}`
    }
  })
  
  const json = await response.json()

  if (!response.ok) {
    SetError(json.error)
    SetEmptyFields(json.emptyFields)
  }
  
  if (response.ok) {
    SetFirstName('')
    SetSurname('')
    Setgender('')
    SetAge('')
    SetEmail('')
    SetLinkedIn('')
    SetMaritalStatus('')
    SetSeniority('')
    SetGrade('')
    SetDepartment('')
    SetInfluence('')
    SetFrequency('')
    SetProjects('')
    SetTravel('')
    SetOutsideContact('')
    SetFeelSafe('')
    SetLevel('')
    SetReported(false)
    SetError(null)
    dispatch({type: 'CREATE_CASE', payload: json })
    SetEmptyFields([])
    navigate('/mycases')
  } 
} catch (error) {
  SetError('An error occured while creating the case')
  }
};

  return (
    <form className="large" onSubmit={handleSubmit}>
      <h2>The individual involved in the case</h2>
      <div className="item">
        <div className="details">
          <label>First name:</label>
          <input 
          type="text"
          placeholder="First name"
          onChange={(e) => SetFirstName(e.target.value)}
          value={firstName}
          className={emptyFields.includes('firstname') ? 'error' : ''}
          ></input>
          <label>Surname:</label>
          <input 
          type="text"
          placeholder="Surname"
          onChange={(e) => SetSurname(e.target.value)}
          value={surname}
          className={emptyFields.includes('surname') ? 'error' : ''}
          ></input>
          <label>Gender:</label>
          <select
          onChange={(e) => Setgender(e.target.value)}
          value={gender}
          className={emptyFields.includes('gender') ? 'error' : ''}
          >
            <option>Select gender</option>
            <option>Male</option>
            <option>Female</option>
          </select>
          <label>Age:</label>
          <input 
          type="number"
          onChange={(e) => SetAge(e.target.value)}
          value={age}
          className={emptyFields.includes('age') ? 'error' : ''}
          ></input>
          <label>Work email:</label>
          <input 
          type="email"
          placeholder="Email"
          onChange={(e) => SetEmail(e.target.value)}
          value={email}
          className={emptyFields.includes('email') ? 'error' : ''}
          ></input>
        <label>LinkedIn:</label>
          <input 
          type="url"
          placeholder="LinkedIn"
          onChange={(e) => SetLinkedIn(e.target.value)}
          value={linkedIn}
          ></input>
          <label>Marital status:</label>
          <select
          onChange={(e) => SetMaritalStatus(e.target.value)}
          value={maritalStatus}
          className={emptyFields.includes('married') ? 'error' : ''}
          >
            <option>Select status</option>
            <option>Single</option>
            <option>Married</option>
            <option>Civil partnership</option>
          </select>
        </div>
        <div className="info">
          <h3>Info:</h3>
          <p>We need this information because</p>
        </div>
      </div>
      <h2>Details about their position in the company</h2>
      <div className="item">
        <div className="details">
          <label>Are they more senior, same grade or junior:</label>
          <select
          onChange={(e) => SetSeniority(e.target.value)}
          value={seniority}
          className={emptyFields.includes('seniority') ? 'error' : ''}
          >
            <option>Select</option>
            <option>Senior</option>
            <option>Same grade</option>
            <option>Junior</option>
          </select>
          <label>What is their grade:</label>
          <input 
          type="text"
          placeholder="Grade"
          onChange={(e) => SetGrade(e.target.value)}
          value={grade}
          className={emptyFields.includes('grade') ? 'error' : ''}
          ></input>
          <label>Are they in the same department:</label>
          <select
          onChange={(e) => SetDepartment(e.target.value)}
          value={department}
          className={emptyFields.includes('department') ? 'error' : ''}
          >
            <option>Select</option>
            <option>Yes</option>
            <option>No</option>
          </select>
          <label>Do they influence your performance review:</label>
          <select
            onChange={(e) => SetInfluence(e.target.value)}
            value={influence}
            className={emptyFields.includes('influence') ? 'error' : ''}
            >
            <option>Select</option>
            <option>Yes</option>
            <option>No</option>
          </select>
          <label>Do you see them daily, weekly or Monthly:</label>
          <select
            onChange={(e) => SetFrequency(e.target.value)}
            value={frequency}
            className={emptyFields.includes('frequency') ? 'error' : ''}
            >
            <option>Select</option>
            <option>Daily</option>
            <option>Weekly</option>
            <option>Monthly</option>
          </select>
          <label>Do you work on projects together:</label>
          <select
            onChange={(e) => SetProjects(e.target.value)}
            value={projects}
            className={emptyFields.includes('projects') ? 'error' : ''}
            >
            <option>Select</option>
            <option>Yes</option>
            <option>No</option>
          </select>
          <label>Could these projects involve travel and hotel stays:</label>
          <select
            onChange={(e) => SetTravel(e.target.value)}
            value={travel}
            className={emptyFields.includes('travel') ? 'error' : ''}
            >
            <option>Select</option>
            <option>Yes</option>
            <option>No</option>
          </select>
          <label>Has the individual tried to contact you outside the workplace:</label>
          <select
            onChange={(e) => SetOutsideContact(e.target.value)}
            value={outsideContact}
            className={emptyFields.includes('outsidecontact') ? 'error' : ''}
            >
            <option>Select</option>
            <option>Yes</option>
            <option>No</option>
          </select>
        </div>
        <div className="info">
          <h3>Info:</h3>
          <p>We need this information because</p>
        </div>        
      </div>
      <h2>Final step</h2>
      <div className="item">
        <div className="details">
        <label>Do you feel safe:</label>
          <select
            onChange={(e) => SetFeelSafe(e.target.value)}
            value={feelSafe}
            className={emptyFields.includes('safe') ? 'error' : ''}
            >
            <option>Select</option>
            <option>Yes</option>
            <option>No</option>
          </select>
          <label>Select the initial level you would like to set for this case:</label>
          <select
            onChange={(e) => SetLevel(e.target.value)}
            value={level}
            className={emptyFields.includes('level') ? 'error' : ''}
          >
            <option>Select</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
        </div>
        <div className="info">
          <h3>Info:</h3>
          <p>We need this information because</p>
        </div>        
      </div>
      <button><h3>Create case</h3></button>
      {error && <div className="error">{error}</div>}
    </form>
  )
}

export default CreateCase