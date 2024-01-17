import { useEffect } from 'react'
import CaseOverview  from '../components/CaseOverview'
import { useNavigate } from 'react-router-dom'
import { useMycasesContext } from '../hooks/useMyCasesContext'
import { useAuthContext } from '../hooks/useAuthContext'



const MyCases = () => {

  const { mycases, dispatch } = useMycasesContext()
  const { user } = useAuthContext()

  useEffect(() => {

    // const userId = user._id
    const fetchMycases = async () => {
      const response = await fetch ('http://localhost:3003/case', {
        method: 'GET',
        mode: 'cors',
        headers: {
          'Authorization': `Bearer ${user.token}`
        }
      })
      const json = await response.json()

      if (response.ok) {
        dispatch({type: 'SET_MYCASES', payload: json})
      }
    }
    if (user) {
      fetchMycases()
    }
  }, [dispatch, user])

  const navigate= useNavigate()

  const handleAddCase = () => {
    navigate('/addcase')
  }

  return (

    <div className="mycases-container">
      <section className='reported-cases'>
      <section className='mycases-action'>
        <h2>Reported cases</h2>
      </section>
      <section className='caselist'>
      {mycases &&
      mycases.map((mycase) => {
      if (mycase.reported) {
        return <CaseOverview className="caseitem" key={mycase._id} mycase={mycase}></CaseOverview>;
      }
      return null; // If you don't want to render anything when mycase is not reported
    })}
      </section> 
      </section>
      <section className='mycases-action'>
        <h2>My cases</h2>
        <button 
        type='button'
        onClick={handleAddCase}
        >+</button>
      </section>
      <section className='caselist'>
      {mycases &&
    mycases.map((mycase) => {
      if (!mycase.reported) {
        return <CaseOverview className="caseitem" key={mycase._id} mycase={mycase}></CaseOverview>;
      }
      return null; 
    })}
      </section>
    </div>
  )
}

export default MyCases  