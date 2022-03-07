import { BsArrowBarLeft } from "react-icons/bs";
import "./teamRoster.css";

export const TeamRoster = ({ data, openTeam, setOpenTable }) => {
  return (
    <>
      <div className="tableContainer">
        <div className="tableTeamsWrapper">
          <button
            className="teamRosterGoBackButton"
            onClick={() => setOpenTable("teams")}
          >
            <BsArrowBarLeft />
          </button>
          <div className="teamWrapper">
            <h1 className="teamName">{openTeam}</h1>
            <table className="styledTable" id="rosterTable">
              <thead>
                <tr>
                  <th>Posicion</th>
                  <th>Jugador</th>
                  <th>Nivel</th>
                  <th>SPP</th>
                  <th>MA</th>
                  <th>ST</th>
                  <th>AG</th>
                  <th>AV</th>
                  <th>Habilidades</th>
                  <th>Heridas</th>
                </tr>
              </thead>
              <tbody>
                {data.teamPlayers
                  .filter((player) => player.team === openTeam)
                  .map((row) => {
                    return (
                      <tr>
                        <td>{row.type.split("_", 2)[1]}</td>
                        <td>{row.player_name}</td>
                        <td>{row.level}</td>
                        <td>{row.xp_gain}</td>
                        <td>{row.ma}</td>
                        <td>{row.st}</td>
                        <td>{row.ag}</td>
                        <td>{row.av}</td>
                        <td>{JSON.parse(row.skills).join(", ")}</td>
                        <td>{JSON.parse(row.cas_sustained).join(", ")}</td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};
