import { useNavigate } from "react-router-dom"
import { useAuthContext } from "../hooks/useAuthContext"
import { useState } from "react"


const AddProfile = () => {


  const { user } = useAuthContext()
  const navigate = useNavigate()
  const [firstname, SetFirstname] = useState('')
  const [surname, SetSurname] = useState('')
  const [gender, SetGender] = useState('')
  const [dateofbirth, SetDateOfBirth] = useState('')
  const [phonenumber, SetPhoneNumber] = useState('')
  const [companyname, SetCompanyName] = useState('')
  const [ceoname, SetCeoName] = useState('')
  const [ceoemail, SetCeoEmail] = useState('')
  const [hrname, SetHrName] = useState('')
  const [hremail, setHrEmail] = useState('')
  const [companywebsite, SetCompanyWebsite] = useState('')
  const [companytwitter, SetCompanyTwitter] = useState('')
  const [error, SetError] = useState(null);
  const [emptyFields, SetEmptyFields] = useState([])

  const handleAddprofile = async (e) => {
    e.preventDefault()

    if (!user) {
      SetError('You must signup to add a profile')
      return
    }

    const newProfile = {
      firstname,
      surname,
      gender,
      dateofbirth,
      phonenumber,
      companyname,
      ceoname,
      ceoemail,
      hrname,
      hremail,
      companywebsite,
      companytwitter
    }

    try {

      const response = await fetch ('http://localhost:3003/profile/addprofile', {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify(newProfile),
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
        SetFirstname('')
        SetSurname('')
        SetGender('')
        SetDateOfBirth('')
        SetPhoneNumber('')
        SetCompanyName('')
        SetCeoName('')
        SetCeoEmail('')
        SetHrName('')
        setHrEmail('')
        SetCompanyWebsite('')
        SetCompanyTwitter('')
        SetError(null)
        SetEmptyFields([])
        navigate('/mycases')
      }
      else { 
        SetError(json.error)
      }
    } catch (error) {
      SetError('An error occurred while creating your profile')
      }
    };
    
    return (
    <form className="large" onSubmit={handleAddprofile}>
      <h2>Personal info</h2>
      <div className="item">
        <div className="details">
          <label>First name:</label>
          <input 
          type="text"
          placeholder="First name"
          onChange={(e) => SetFirstname(e.target.value)}
          value={firstname}
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
          onChange={(e) => SetGender(e.target.value)}
          value={gender}
          className={emptyFields.includes('gender') ? 'error' : ''}
          >
            <option>Select gender</option>
            <option>Male</option>
            <option>Female</option>
          </select>
          <label>Date of birth:</label>
          <input 
          type="date"
          onChange={(e) => SetDateOfBirth(e.target.value)}
          value={dateofbirth}
          className={emptyFields.includes('dob') ? 'error' : ''}
          ></input>
          <label>Phone number:</label>
          <input 
          type="tel"
          placeholder="Phone number"
          pattern="[0-9]{3}[0-9]{4}[0-9]{4}"
          onChange={(e) => SetPhoneNumber(e.target.value)}
          value={phonenumber}
          className={emptyFields.includes('phonenumber') ? 'error' : ''}
          ></input>
        </div>
        <div className="info">
          <h3>Info:</h3>
          <p>We need this information because</p>
        </div>
      </div>

      <h2>Company Leadership</h2>
      <div className="item">
        <div className="details">
          <label>Company name:</label>
          <input 
          type="text"
          placeholder="Company name"
          onChange={(e) => SetCompanyName(e.target.value)}
          value={companyname}
          className={emptyFields.includes('company') ? 'error' : ''}
          ></input>
          <label>CEO name:</label>
          <input 
          type="text"
          placeholder="Company CEO name"
          onChange={(e) => SetCeoName(e.target.value)}
          value={ceoname}
          className={emptyFields.includes('ceoname') ? 'error' : ''}
          ></input>
          <label>CEO email:</label>
          <input 
          type="email"
          placeholder="CEO email"
          onChange={(e) => SetCeoEmail(e.target.value)}
          value={ceoemail}
          ></input>
          <label>HR Director name:</label>
          <input 
          type="text"
          placeholder="HR Director / representative (full name)"
          onChange={(e) => SetHrName(e.target.value)}
          value={hrname}
          ></input>
          <label>HR Director email:</label>
          <input 
          type="email"
          placeholder="HR email"
          onChange={(e) => setHrEmail(e.target.value)}
          value={hremail}
          ></input>
        </div>
        <div className="info">
          <h3>Info:</h3>
          <p>We need this information because</p>
        </div>
      </div>

      <h2>Company Socials</h2>
      <div className="item">
        <div className="details">
          <label>Website:</label>
          <input 
          type="url"
          placeholder="Company website"
          onChange={(e) => SetCompanyWebsite(e.target.value)}
          value={companywebsite}
          className={emptyFields.includes('website') ? 'error' : ''}
          ></input>
          <label>Twitter:</label>
          <input 
          type="url"
          placeholder="Twitter"
          onChange={(e) => SetCompanyTwitter(e.target.value)}
          value={companytwitter}
          ></input>
        </div>
        <div className="info">
          <h3>Info:</h3>
          <p>We need this information because</p>
        </div>
      </div>
      <button><h3>Complete profile</h3></button>
      {error && <div className="error">{error}</div>}
    </form>
  )
}

export default AddProfile