import { useAuthContext } from "../hooks/useAuthContext"
// import { useMyIncidentsContext } from "../hooks/useMyIncidentsContext"
import moment from 'moment'

const IncidentOverview = ({ myincident, onDelete }) => {

  const shortDate = moment(myincident.date).format('Do MMM YY')
  const { user } = useAuthContext()
  // const { dispatch } = useMyIncidentsContext()

  const handleDeleteClick = async () => {
    if (!user) {
      return
    }

    const response = await fetch('http://localhost:3003/incident/'+myincident._id, {
      method: 'DELETE',
      mode: 'cors',
      headers: {
        'Authorization': `Bearer ${user.token}`
      }
    })
    // const json = await response.json()

    if (response.ok) {
      // dispatch({type: 'DELETE_INCIDENT', payload: json})
      onDelete(myincident._id)
    } else {
      console.log(response.error)
    }
  }

  return (
      <div className="incident-item">
        <div className="incident-summary">
          <p>Date: {shortDate}</p>
          <p>Type: {myincident.medium}</p>
          <p>Grade: {myincident.grade}</p>
          <p>Location: {myincident.location} </p>
          <p>{myincident.recurring} incident</p>
        </div>
        <div className="incident-detail">
           <section className="incident-description">
              <h3>Description:</h3>
              <p>{myincident.description}</p>
            </section>
            <section>
              <button onClick={handleDeleteClick}><h3>Delete</h3></button>
            </section>
        </div>
      </div>
    
  )
}

export default IncidentOverview