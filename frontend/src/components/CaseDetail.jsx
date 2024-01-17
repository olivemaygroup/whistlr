

const CaseDetail = ({ CaseDetail }) => {


  return (
        <tr>
          <td>{CaseDetail.firstName} {CaseDetail.surname}</td>
          <td>{CaseDetail.gender}</td>
          <td>{CaseDetail.age}</td>
          <td>{CaseDetail.email}</td>
          <td>{CaseDetail.maritalStatus}</td>
          <td>{CaseDetail.seniority}</td>
          <td>{CaseDetail.grade}</td>
          <td>{CaseDetail.department}</td>
          <td>{CaseDetail.influence}</td>
          <td>{CaseDetail.projects}</td>
          <td>{CaseDetail.travel}</td>
          <td>{CaseDetail.feelSafe}</td>
          <td>{CaseDetail.level}</td>
        </tr>
  )
}

export default CaseDetail