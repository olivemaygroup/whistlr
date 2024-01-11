

const AddProfile = () => {

  return (
    <form className="large">

      <h2>Personal info</h2>
      <div className="item">
        <div className="details">
          <label>First name:</label>
          <input 
          type="text"
          placeholder="First name"
          ></input>
          <label>Surname:</label>
          <input 
          type="text"
          placeholder="Surname"
          ></input>
          <label>Gender:</label>
          <select>
            <option>Select gender</option>
            <option>Male</option>
            <option>Female</option>
          </select>
          <label>Date of birth:</label>
          <input 
          type="date"
          ></input>
          <label>Phone number:</label>
          <input 
          type="tel"
          placeholder="Phone number"
          pattern="[0-9]{3}[0-9]{4}[0-9]{4}"
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
          ></input>
          <label>CEO name:</label>
          <input 
          type="text"
          placeholder="Company CEO name"
          ></input>
          <label>CEO email:</label>
          <input 
          type="email"
          placeholder="Company email"
          ></input>
          <label>HR Director name:</label>
          <input 
          type="text"
          placeholder="HR Director / representative (full name)"
          ></input>
          <label>HR Director email:</label>
          <input 
          type="email"
          placeholder="Company email"
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
          ></input>
          <label>LinkedIn:</label>
          <input 
          type="url"
          placeholder="LinkedIn"
          ></input>
          <label>Twitter:</label>
          <input 
          type="url"
          placeholder="Twitter"
          ></input>
        </div>
        <div className="info">
          <h3>Info:</h3>
          <p>We need this information because</p>
        </div>
      </div>
      <button><h3>Complete profile</h3></button>

    </form>
  )
}

export default AddProfile