import { useAuthContext } from "../hooks/useAuthContext"
import { useMycasesContext } from "../hooks/useMyCasesContext"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
// import CaseOverview from "./CaseOverview"
import { useParams } from "react-router-dom"

const CreateIncident = () => {

  const { caseId } = useParams()
  const navigate = useNavigate()

  const { dispatch } = useMycasesContext()
  const { user } = useAuthContext()

  const [date, setDate] = useState('')
  const [recurring, setRecurring] = useState('')
  const [medium, setMedium] = useState('')
  const [location, setLocation] = useState('')
  const [platform, setPlatform] = useState('')
  const [witnessed, setWitnessed] = useState('')
  const [grade, setGrade] = useState('')
  const [description, setDescription] = useState('')
  const [error, setError] = useState(null)
  const [emptyFields, SetEmptyFields] = useState([])
 
  const handleSubmit = async (e) => {
    e.preventDefault()

    if(!user) {
      setError('You must be logged in')
      return
    }
  

  const newIncident = {
    date,
    recurring,
    medium,
    location,
    platform,
    witnessed,
    grade,
    description,
    user_id: user._id,
    case_id: caseId,
  }

  try {
    const response = await fetch('http://localhost:3003/incident/create', {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify(newIncident),
      headers: {
        'content-type': 'Application/json',
        'Authorization': `Bearer ${user.token}`
      }
    })
    const json = await response.json()

    if (!response.ok) {
      setError(json.error)
      SetEmptyFields(json.emptyFields)
    }

    if (response.ok) {
      setDate('')
      setRecurring('')
      setMedium('')
      setLocation('')
      setPlatform('')
      setWitnessed('')
      setGrade('')
      setDescription('')
      setError(null)
      dispatch({type: 'CREATE_INCIDENT', payload: json})
      SetEmptyFields([])
      navigate('/mycases')
    }
    if (!response.ok) {
      setError(json.error)
    }
  } catch (error) {
    setError({error: error})
  }
}

  return (
    <form className="large" onSubmit={handleSubmit}>
      <h2>Create a new incident</h2>
      <div className="item">
        <div className="details">
          <label>Date:</label>
          <input 
          type="date"
          onChange={(e) => setDate(e.target.value)}
          value={date}
          className={emptyFields.includes('date') ? 'error' : ''}
          ></input>
          <label>Is this the first incident or recurring:</label>
          <select
          onChange={(e) => setRecurring(e.target.value)}
          value={recurring}
          className={emptyFields.includes('first') ? 'error' : ''}
          >
            <option>Select</option>
            <option>First</option>
            <option>Recurring</option>
          </select>
          <label>Was it in-person or digital:</label>
          <select
          onChange={(e) => setMedium(e.target.value)}
          value={medium}
          className={emptyFields.includes('medium') ? 'error' : ''}
          >
            <option>Select</option>
            <option>In-person</option>
            <option>Digital</option>
          </select>
          <label>Location (In-person):</label>
          <select
          onChange={(e) => setLocation(e.target.value)}
          value={location}
          className={emptyFields.includes('location') ? 'error' : ''}
          >
            <option>Select or choose NA</option>
            <option>NA</option>
            <option>Office</option>
            <option>Company social event</option>
            <option>Team social event</option>
            <option>Client site</option>
            <option>Travelling</option>
            <option>Work hotel stay</option>
            <option>Outside work</option>
          </select>
          <label>Platform (Digital):</label>
          <select
          onChange={(e) => setPlatform(e.target.value)}
          value={platform}
          className={emptyFields.includes('platform') ? 'error' : ''}
          >
            <option>Select or choose NA</option>
            <option>NA</option>
            <option>Email</option>
            <option>Phonecall</option>
            <option>Messaging app</option>
            <option>Social media</option>
          </select>
          <label>Was the incident witnessed:</label>
          <select
          onChange={(e) => setWitnessed(e.target.value)}
          value={witnessed}
          className={emptyFields.includes('witnessed') ? 'error' : ''}
          >
            <option>Select</option>
            <option>Yes</option>
            <option>No</option>
          </select>
          <label>Grade the incident:</label>
          <select
          onChange={(e) => setGrade(e.target.value)}
          value={grade}
          className={emptyFields.includes('grade') ? 'error' : ''}
          >
            <option>Select</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
          <label>Describe the incident:</label>
          <textarea 
          rows={15}
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          className={emptyFields.includes('description') ? 'error' : ''}
          />
        </div>
        <div className="info">
          <h3>Summary</h3>
          <p>It is important that you give a fair and accurate account of each incident that has taken place.</p>
          <p>Harrassment can occur in many forms, both physically and digitally, when you are at work or at home.</p>
          <p><strong>Grade</strong></p>
          <p>The overall grade of your case can be set by you at any time. Incidents can vary with severity. Please grade the incident appropriately so that the whistlr team can track the trend in the incidents occuring. </p>
          <p><strong>Description</strong></p>
          <p>Please describe the context, before, during and after the incident, including details of witnesses, or someone you confided in after.</p>
          <p>For example:</p>
          <ul>
            <li>I was at our departments Christmas dinner at INSERT hotel</li>
            <li>I was walking to the toilets when Joe Bloggs followed me in, placed his arm around me and told me my bum looked cute in my dress and suggested we went outside together</li>
            <li>Later at the bar, Joe Bloggs came next to me and leant in to whisper in my ear, and placed his hand on my breast. I immediately removed his hand and walked away</li>
            <li>My colleague JANE DOE followed me having seen it, to see if I was ok.</li>
            <li>Later when I was at home, Joe Bloogs messaged me to see if I wanted to come to his place.</li>
          </ul>
        </div>
      </div>
      <button><h3>Add incident</h3></button>
      {error && <div className="error">{error}</div>}
    </form>
  )
}

export default CreateIncident