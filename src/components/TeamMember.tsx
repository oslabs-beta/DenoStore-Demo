import * as React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InfoIcon from '@mui/icons-material/Info';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

type teamMemberProp = {
  name: string;
  github: string;
  linkedin: string;
  picture: string;
  teamMemberInfo: string;
};

const TeamMember: React.FC<teamMemberProp> = ({
  name,
  github,
  linkedin,
  picture,
  teamMemberInfo,
}) => {
  const [teamInfo, setTeamInfo] = React.useState<Boolean>(false);

  const showTeamInfo = () => {
    if (teamInfo) {
      setTeamInfo(false);
    } else {
      setTeamInfo(true);
    }
  };

  return (
    <div className="teamContainer">
      <div className="teamLinks">
        <a href={linkedin}>
          <img className="teamMemberImg" src={picture} />
        </a>
        <br />
        <h1 className="teamMemberName">{name}</h1>
        <a href={github} target="_blank" className="teamLinks" id="github">
          <GitHubIcon />
        </a>{' '}
        <a href={linkedin} target="_blank" className="teamLinks" id="linkedin">
          <LinkedInIcon />
        </a>{' '}
        <br />
        {!teamInfo && <InfoIcon className="infoIcon" onClick={showTeamInfo} />}
      </div>
      {teamInfo && (
        <div>
          <p className="memberParagraph" id="info">
            {teamMemberInfo}
            <br />
            <br />
            <ArrowUpwardIcon
              className="arrowUpwardIcon"
              onClick={showTeamInfo}
            />
          </p>
          <br />
        </div>
      )}
      <br />
    </div>
  );
};

export default TeamMember;
