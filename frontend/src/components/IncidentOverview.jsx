
const IncidentOverview = () => {

  return (
    <div className="incident-container">
      <div className="incident-summary">
        <p><strong>Date:</strong> 31 MAR 2024</p>
        <p><strong>Type:</strong> In-person</p>
        <p><strong>Grade:</strong> 1</p>
        <button><h3>Edit</h3></button>
        <button><h3>Delete</h3></button>
      </div>
      <div className="incident-detail">
        <section>
          <h3>Description:</h3>
          <p>This is a description of what happened</p>
        </section>
        <section>
          <h3>Other info:</h3>
          <p>Recurring</p>
          <p>Location: Office</p>
        </section>
      </div>
    </div>
  )
}

export default IncidentOverview