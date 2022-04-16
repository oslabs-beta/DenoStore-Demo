import * as React from 'react';
import { Link } from 'react-router-dom';
import DemoContainer from './DemoContainer';
import TeamSection from './TeamSection';
import Footer from './Footer';
import Header from './Header';

const Homepage: React.FC = () => {
  return (
    <div>
      <Header />
      <h1 className="name">DenoStore</h1>
      <nav>
        Learn more about how to incorporate DenoStore in your application in our{' '}
        <Link to="/docs">documentation page</Link>.
      </nav>
      <div className="flexbox-container1">
        <div>
          <p className="problemParagraph">This is the problem paragraph.</p>
        </div>
        <div>
          <p className="solutionParagraph">This is the solution paragraph.</p>
        </div>
      </div>
      <div className="logo">Logo</div>
      <div className="graphic">Insert Slideshow Graphic here</div>
      <DemoContainer />
      <TeamSection />
      <Footer />
    </div>
  );
};

export default Homepage;
