import { useAuthContext } from "../hooks/useAuthContext"
import { useMycasesContext } from "../hooks/useMyCasesContext"
import IncidentOverview from '../components/IncidentOverview'
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import moment from 'moment'
// import { useMyIncidentsContext } from "../hooks/useMyIncidentsContext"

const CaseOverview = ({ mycase }) => {
  
  const date = moment(mycase.createdAt).format('Do MMM YY')
  const navigate = useNavigate()
  const [toggle, setToggle] = useState(false)
  const { user } = useAuthContext()
  const { dispatch } = useMycasesContext()
  // const { myincidents, dispatch: dispatchIncident } = useMyIncidentsContext()
  const [localIncidents, SetLocalIncidents] = useState(null)


  useEffect(() => {
    
    const fetchIncidents = async () => {
      const response = await fetch ('http://localhost:3003/incident/'+mycase._id, {
        method: 'GET',
        mode: 'cors',
        headers: {
          'Authorization': `Bearer ${user.token}`
        }
      })
      const json = await response.json()
      console.log('incident fetch', json)
      
      if (response.ok) {
        SetLocalIncidents(json)
        // dispatchIncident({type: 'SET_INCIDENTS', payload: json})
        // console.log('dispatch console: ',dispatchIncident({type: 'SET_INCIDENTS', payload: json}))
      }
    }
    if (user) {
      fetchIncidents()
    }
  // TODO: Add back in dispatchINcident if using global
  }, [ user, mycase._id])

    const handleClick = async () => {
      if (!user) {
        return
      }
      
      const response = await fetch('http://localhost:3003/case/'+mycase._id, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${user.token}`
        }
      })
      const json = await response.json()
      
      if (response.ok) {
        dispatch({type: 'DELETE_CASE', payload: json})
      }
    }


  const handleAddIncident = async () => {
    if (!user)  {
      return
    }
    navigate(`/addincident/${mycase._id}`)
  }

  const handleIncidentToggle = () => {
    setToggle(!toggle)
  }

  const handleDeleteIncident = (myincident) => {
    SetLocalIncidents((localIncidents) =>
    localIncidents.filter((incident) => incident._id !== myincident ))
  }

  const handleReport = async () => {
    if (!user) {
      return
    }
    const reported = (!mycase.reported)
    console.log(reported)

    const response = await fetch('http://localhost:3003/case/'+mycase._id, {
      method: 'PATCH',
      mode: 'cors',
      body: JSON.stringify({reported}),
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${user.token}`
      }
    })
    const json = await response.json()
    console.log('patch response', json)
    if (response.ok) {
      dispatch({type: 'REPORT_CASE', payload: json})
    }
  }

  return (
    <div className="case-container">
      <div className="case-info">
        <p><strong>Person:</strong> {mycase.firstName} {mycase.surname}</p>
        <p><strong>Created:</strong> {date}</p>
      </div>
      <div className="case-options">
        <button onClick={handleAddIncident}><h3>Add incident</h3></button>
        
        { localIncidents ? (
          <button onClick={handleIncidentToggle}><h3>View</h3></button>
          ) : ( 
          <button onClick={handleIncidentToggle}><h3>No incidents</h3></button>
          )
          }
        <button><h3>Edit</h3></button>
        <button onClick={handleReport}><h3>Report</h3></button>
        <button onClick={handleClick}><h3>Delete</h3></button>
      </div>
      { toggle && user && localIncidents && localIncidents.map((item) => (
      <IncidentOverview key={item._id} myincident={item} onDelete={handleDeleteIncident}/>)) }
    </div> 
  )
}

export default CaseOverview