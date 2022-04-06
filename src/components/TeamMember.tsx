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
      <img className="teamMember" src={picture} /> <br />
      <h1 className="teamMemberName">{name}</h1>
      <h3 className="github">
        <a href={github} target="_blank" className="github">
          GitHub
        </a>{' '}
        <br />
        <a href={linkedin} target="_blank">
          LinkedIn
        </a>{' '}
      </h3>
      <br />
    </div>
  );
};

export default TeamMember;
