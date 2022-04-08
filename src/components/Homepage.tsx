import * as React from 'react';
import ProblemParagraph from './ProblemParagraph';
import SolutionParagraph from './SolutionParagraph';
import DenoStoreLogo from './DenoStoreLogo';
import SlideShowGraphic from './SlideshowGraphic';
import DemoContainer from './DemoContainer';
import TeamText from './TeamText';
import Team from './Team';
import Footer from './Footer';
import Header from './Header';

const Homepage: React.FC = () => {
  return (
    <div>
      <Header />
      <h1 className="name">DenoStore</h1>
      <div className="flexbox-container1">
        <ProblemParagraph />
        <SolutionParagraph />
      </div>
      <DenoStoreLogo />
      <SlideShowGraphic />
      <DemoContainer />
      <TeamText />
      <Team />
      <Footer />
    </div>
  );
};

export default Homepage;
