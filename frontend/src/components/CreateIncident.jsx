
const CreateIncident = () => {

  return (
    <form className="large">
      <h2>Create a new incident</h2>
      <div className="item">
        <div className="details">
          <label>Date:</label>
          <input 
          type="date"
          ></input>
          <label>Is this the first incident or recurring:</label>
          <select>
            <option>Select</option>
            <option>First</option>
            <option>Recurring</option>
          </select>
          <label>Was it in-person or digital:</label>
          <select>
            <option>Select</option>
            <option>In-person</option>
            <option>Digital</option>
          </select>
          <label>Location (In-person):</label>
          <select>
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
          <select>
            <option>Select or choose NA</option>
            <option>NA</option>
            <option>Email</option>
            <option>Phonecall</option>
            <option>Messaging app</option>
            <option>Social media</option>
          </select>
          <label>Was the incident witnessed:</label>
          <select>
            <option>Select</option>
            <option>Yes</option>
            <option>No</option>
          </select>
          <label>Grade the incident:</label>
          <select>
            <option>Select</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
          <label>Describe the incident:</label>
          <textarea rows={15}/>
        </div>
        <div className="info">
          <h3>Info:</h3>
          <p>We need this information because</p>
        </div>
      </div>
      <button><h3>Add incident</h3></button>
    </form>
  )
}

export default CreateIncident