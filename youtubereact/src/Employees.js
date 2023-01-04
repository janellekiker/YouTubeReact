import TeamMembers from "./TeamMembers";
import Teams from "./Teams";

function Employees({
  employees,
  selectedTeam,
  handleEmployeeCardClick,
  handleTeamSelectionChange,
}) {
  return (
    <main className="container">
      {/*Team Selector Dropdown*/}
      <div className="row justify-content-center mt-3 mb-3">
        <div className="col-8">
          <Teams
            selectedTeam={selectedTeam}
            handleTeamSelectionChange={handleTeamSelectionChange}
          />
        </div>
      </div>
      {/*Employee Cards*/}
      <div className="row justify-content-center mt-3 mb-3">
        <div className="col-8">
          <div className="card-collection">
            <TeamMembers
              employees={employees}
              handleEmployeeCardClick={handleEmployeeCardClick}
              selectedTeam={selectedTeam}
            />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Employees;
