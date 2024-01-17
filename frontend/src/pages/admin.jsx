import { useState, useEffect } from 'react'
import { useAuthContext } from '../hooks/useAuthContext'
import CaseDetail from '../components/CaseDetail.jsx'


const AdminPage = () => {

  const [reported, SetReported] = useState('')
  const [error, SetError] = useState(null)
  const { user } = useAuthContext()

  useEffect(() => {

    const fetchReported = async () => {
      const response = await fetch ('http://localhost:3003/admin', {
        method: 'GET',
        mode: 'cors',
        headers: {
          'Authorization': `Bearer ${user.token}`
        }
      }) 
      const json = await response.json()

      if (response.ok) {
        SetReported(json)
        SetError(null)
      }
      if (!response.ok) {
        SetError(json.error)
      }
    }
    fetchReported()
  }, [user])




  return (

    <div className="admin-page">
      {error && <p>{error}</p>}
      <h2>Case Administration</h2>
      <div className="admin-container">
        <table>
          <thead>
          <tr>
            <th>Name</th>
            <th>Gender</th>
            <th>Age</th>
            <th>Email</th>
            <th>Marital status</th>
            <th>Seniority</th>
            <th>Grade</th>
            <th>Department</th>
            <th>Influence</th>
            <th>Projects</th>
            <th>Travel</th>
            <th>Safe</th>
            <th>Level</th>
          </tr>
          </thead>
          <tbody>
          {user && reported && reported.map((item) => (
          <CaseDetail key={item._id} CaseDetail={item}></CaseDetail>
          ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default AdminPage