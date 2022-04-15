import * as React from 'react';
import DemoContainer from './DemoContainer';
import TeamSection from './TeamSection';
import Footer from './Footer';
import Header from './Header';
// @ts-ignore
import logo from '../logo.png';

const Homepage: React.FC = () => {
  return (
    <div>
      <Header />
      <h1 className="DenoStore-title">DenoStore</h1>
      <div id="main-section">
        <div className="homepage-paragraphs-div">
          <p className="homepage-paragraphs">
            Caching is a necessity at scale, but setting it up for GraphQL can
            be challenging and time-consuming, even more so in a Deno runtime
            environment.
          </p>

          <p className="homepage-paragraphs">
            DenoStore makes caching GraphQL queries through a Deno/Oak server
            quick to set up and easy to configure. Get ready for lightning fast
            GraphQL.
          </p>
        </div>
        <img src={logo} alt="Logo" id="logo" />
        {/* <div className="graphic">Insert Slideshow Graphic here</div> */}
      </div>
      <DemoContainer />
      <TeamSection />
      <Footer />
    </div>
  );
};

export default Homepage;
