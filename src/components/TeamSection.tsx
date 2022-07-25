import * as React from 'react';
import TeamMember from './TeamMember';

const TeamSection: React.FC = () => {
  return (
    <div>
      <h1 className="subTitle">DenoStore Team</h1>
      <div className="team" id="team">
        <TeamMember
          name="Jake Van Vorhis"
          github="https://github.com/jakedoublev/"
          linkedin="https://www.linkedin.com/in/jakedoublev/"
          picture="https://media-exp2.licdn.com/dms/image/C4E03AQHyl3AaR70Qvw/profile-displayphoto-shrink_800_800/0/1539889311460?e=1660780800&v=beta&t=S2DjVbbdOkgtu34KxVSlERq1qB8fIJ9-Ei7eTpNt9jE"
          teamMemberInfo="Jake is a software engineer with a bias for working across the stack to render beautiful, featureful frontends connected to optimized, performant backends. Having previously co-founded and grown a startup, he codes with sincere empathy for the end user and with mechanics of the business always in mind."
        />
        <TeamMember
          name="James Kim"
          github="https://github.com/jamesmjkim/"
          linkedin="https://www.linkedin.com/in/jamesmjkim/"
          picture="https://media-exp2.licdn.com/dms/image/C5603AQFmC3J19RX5jQ/profile-displayphoto-shrink_800_800/0/1517274087744?e=1660780800&v=beta&t=F5sMva1iLdjSJxBWyJtAaULK3hPLexE9G5UCfe_EzL0"
          teamMemberInfo="James is a full stack software engineer, leaning towards building complex backends. He has a keen interest in distributed systems, containerization, and building scalable applications. Aside from software engineering, he loves to be active (swinging a golf club, playing basketball, hiking trails, etc.) and build exclusive LEGO sets."
        />
        <TeamMember
          name="Jessica Wachtel"
          github="https://github.com/JessicaWachtel"
          linkedin="https://www.linkedin.com/in/jessicawachtel/"
          picture="https://media-exp2.licdn.com/dms/image/C5603AQHH5ZsoCQSBxA/profile-displayphoto-shrink_800_800/0/1648128285264?e=1660780800&v=beta&t=QQC9YCyIWbZxSJ2UpPSTNczZa9szII9ad2AXio5dGzY"
          teamMemberInfo="Jessica is a multi-passionate full stack software engineer with a focus on building intuitive yet complex frontends and intricate, scalable backends. When she isn't working on code, she loves hiking in upstate New York and traveling with friends."
        />
        <TeamMember
          name="Scott Tatsuno"
          github="https://github.com/sktatsuno/"
          linkedin="https://www.linkedin.com/in/scott-tatsuno/"
          picture="https://media-exp1.licdn.com/dms/image/C5603AQF-WjDWJztc5w/profile-displayphoto-shrink_800_800/0/1537471621408?e=2147483647&v=beta&t=6tnZ2bI4i0vSSY26nBYD2UVkDb4n9Rcuktjj0-zJJ1M"
          teamMemberInfo="Scott is a full stack engineer who develops enterprise and open-source applications leveraging multiple tech stacks. He has a passion for designing scalable backends and databases as well as creating modular, user-focused frontends. Aside from developing, he enjoys card games, climbing and visiting family back home in Hawaii."
        />
        <TeamMember
          name="Ting Xian Ho"
          github="https://github.com/lawauditswe"
          linkedin="https://www.linkedin.com/in/sa201034/"
          picture="https://media-exp1.licdn.com/dms/image/C4D03AQF0jRg_RDMG-A/profile-displayphoto-shrink_800_800/0/1650416608025?e=1664409600&v=beta&t=Sl0jjpv2Mt8wTFYfThvVAdu4qmuIqBngI74N-m1kKgY"
          teamMemberInfo="Ting Xian is a full stack software developer who is passionate about building visually appealing and user-friendly webpages. In his free time, when he’s not contributing to a variety of open source projects, you will likely see him playing competitive Pokemon or singing Taylor Swift at the karaoke bar."
        />
      </div>
    </div>
  );
};

export default TeamSection;
