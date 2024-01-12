
const CreateCase = () => {

  return (
    <form className="large">
      <h2>The individual involved in the case</h2>
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
          <label>Age:</label>
          <input 
          type="number"
          ></input>
          <label>Work email:</label>
          <input 
          type="email"
          placeholder="Email"
          ></input>
        <label>LinkedIn:</label>
          <input 
          type="url"
          placeholder="LinkedIn"
          ></input>
          <label>Marital status:</label>
          <select>
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
          <select>
            <option>Select</option>
            <option>Senior</option>
            <option>Same grade</option>
            <option>Junior</option>
          </select>
          <label>What is their grade:</label>
          <input 
          type="text"
          placeholder="Grade"
          ></input>
          <label>Are they in the same department:</label>
          <select>
            <option>Select</option>
            <option>Yes</option>
            <option>No</option>
          </select>
          <label>Do they influence your performance review:</label>
          <select>
            <option>Select</option>
            <option>Yes</option>
            <option>No</option>
          </select>
          <label>Do you see them daily, weekly or Monthly:</label>
          <select>
            <option>Select</option>
            <option>Daily</option>
            <option>Weekly</option>
            <option>Monthly</option>
          </select>
          <label>Do you work on projects together:</label>
          <select>
            <option>Select</option>
            <option>Yes</option>
            <option>No</option>
          </select>
          <label>Could these projects involve travel and hotel stays:</label>
          <select>
            <option>Select</option>
            <option>Yes</option>
            <option>No</option>
          </select>
          <label>Has the individual tried to contact you outside the workplace:</label>
          <select>
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
          <select>
            <option>Select</option>
            <option>Yes</option>
            <option>No</option>
          </select>
          <label>Select the initial level you would like to set for this case:</label>
          <select>
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
    </form>
  )
}

export default CreateCase