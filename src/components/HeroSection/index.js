import "./HeroElements.css";
import { StandingsTable } from "../Elements/LeagueInfo/leagueInfo";
import { TeamsTable } from "../Elements/TeamsInfo/teamsInfo";
import { TeamRoster } from "../Elements/TeamsInfo/Teams/teamRoster";
import { useState } from "react";

const Hero = ({ openTable, data, setOpenTable }) => {
  const [openTeam, setOpenTeam] = useState();

  return (
    <>
      <div className="body">
        <div className="backgroundImage">
          {openTable === "standings" && (
            <StandingsTable data={data.standings} />
          )}
          {openTable === "teams" && (
            <TeamsTable
              data={data}
              setOpenTeam={setOpenTeam}
              setOpenTable={setOpenTable}
            />
          )}
          {openTable === "teamDetails" && openTeam !== undefined && (
            <TeamRoster
              data={data}
              openTeam={openTeam}
              setOpenTable={setOpenTable}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Hero;
