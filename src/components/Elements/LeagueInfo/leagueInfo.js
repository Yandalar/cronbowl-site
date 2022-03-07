import _ from "underscore";
import "./leagueInfo.css";

export const StandingsTable = ({ data }) => {
  const competitions = _.groupBy(data, ({ id_competition }) => id_competition);
  return (
    <div className="tableContainer">
      <div className="tableOneWrapper">
        {Object.entries(competitions).map(([id_competition, standings]) => {
          return (
            <table className="styledTable">
              <thead>
                <tr>
                  <th>Equipo</th>
                  <th>Raza</th>
                  <th>Coach</th>
                  <th>TV</th>
                  <th>Pts</th>
                  <th>V</th>
                  <th>E</th>
                  <th>D</th>
                </tr>
              </thead>
              <tbody>
                {standings.map((row) => {
                  return (
                    <tr>
                      <td>{row.team}</td>
                      <td>{row.race_name}</td>
                      <td>{row.coach}</td>
                      <td>{row.tv}</td>
                      <td>{row.points}</td>
                      <td>{row.win}</td>
                      <td>{row.draw}</td>
                      <td>{row.lost}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          );
        })}
      </div>
    </div>
  );
};
