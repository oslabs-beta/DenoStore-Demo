import * as React from 'react';

type teamMemberProp = {
  name: string;
  github: string;
  linkedin: string;
  picture: string;
};

const TeamMember: React.FC<teamMemberProp> = ({
  name,
  github,
  linkedin,
  picture,
}) => {
  return (
    <div className="teamContainer">
      <a href={linkedin}>
        <img className="teamMember" src={picture} />
      </a>{' '}
      <br />
      <h1 className="teamMemberName">{name}</h1>
      <div className="teamLinks">
        <a href={github} target="_blank" className="teamLinks">
          GitHub
        </a>{' '}
        <br />
        <a href={linkedin} target="_blank" className="teamLinks">
          LinkedIn
        </a>{' '}
      </div>
      <br />
    </div>
  );
};

export default TeamMember;
