import "./teamsInfo.css";

export const TeamsTable = ({ data, setOpenTeam, setOpenTable }) => (
  <>
    <div className="tableContainer">
      <div className="tableTeamsWrapper">
        <table className="styledTable">
          <thead>
            <tr>
              <th>Equipo</th>
              <th>Raza</th>
              <th>Coach</th>
              <th>TV</th>
            </tr>
          </thead>
          <tbody>
            {data.standings.map((row) => {
              return (
                <tr>
                  <td>
                    <button
                      className="buttonTeams"
                      onClick={() => {
                        setOpenTeam(row.team);
                        setOpenTable("teamDetails");
                      }}
                    >
                      {row.team}
                    </button>
                  </td>
                  <td>{row.race_name}</td>
                  <td>{row.coach}</td>
                  <td>{row.tv}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  </>
);
