import * as React from 'react';
import { Link } from 'react-router-dom';
import DemoContainer from './DemoContainer';
import TeamSection from './TeamSection';
import Header from './Header';
import Footer from './Footer';
// @ts-ignore
import logo from '../logo.png';

const Homepage: React.FC = () => {
  return (
    <div>
      <Header />
      <div className="homepage-without-header">
        <h1 className="DenoStore-title">DenoStore</h1>
        <div id="main-section">
          <div className="homepage-paragraphs-div">
            <nav
              className="homepage-paragraphs"
              id="documentation-homepage-link"
            >
              Learn more about how to incorporate DenoStore in your application
              in our <Link to="/docs">documentation page</Link>.
            </nav>
            <p className="homepage-paragraphs">
              Caching is a necessity at scale, but setting it up for GraphQL can
              be challenging and time-consuming, even more so in a Deno runtime
              environment.
            </p>

            <p className="homepage-paragraphs">
              DenoStore makes caching GraphQL queries through a Deno/Oak server
              quick to set up and easy to configure. Get ready for lightning
              fast GraphQL.
            </p>
          </div>
          <img src={logo} alt="Logo" id="logo" />
        </div>
        <DemoContainer />
        <TeamSection />
        <Footer />
      </div>
    </div>
  );
};

export default Homepage;
