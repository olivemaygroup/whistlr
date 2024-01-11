
const CaseOverview = () => {

  return (
    <div className="case-container">
      <div className="case-info">
        <p><strong>Number:</strong> 12345</p>
        <p><strong>Grade:</strong> 1</p>
        <p><strong>Created:</strong> 12 Jan 2024</p>
      </div>
      <div className="case-options">
        <button><h3>Add incident</h3></button>
        <button><h3>View incidents</h3></button>
        <button><h3>Edit</h3></button>
        <button><h3>Report</h3></button>
        <button><h3>Delete</h3></button>
      </div>
    </div> 
  )
}

export default CaseOverview