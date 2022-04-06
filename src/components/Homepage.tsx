import * as React from 'react';
import ProblemParagraph from './ProblemParagraph';
import SolutionParagraph from './SolutionParagraph';
import DenoStoreLogo from './DenoStoreLogo';
import SlideShowGraphic from './SlideshowGraphic';
import Demo from './Demo';
import TeamText from './TeamText';
import Team from './Team';

const Homepage: React.FC = () => {
  return (
    <div>
      <div className="flexbox-container1">
        <ProblemParagraph />
        <SolutionParagraph />
      </div>
      <DenoStoreLogo />
      <SlideShowGraphic />
      <Demo />
      <TeamText />
      <Team />
    </div>
  );
};

export default Homepage;
