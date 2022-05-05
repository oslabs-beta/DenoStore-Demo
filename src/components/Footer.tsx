import * as React from 'react';
import './../styles.css';

const Footer: React.FC = () => {
  return (
    <div className="footer" id="moreLinks">
      {/* all links to the github for now */}
      <div className="footerBody">
        <a
          href="https://github.com/oslabs-beta/DenoStore"
          target="_blank"
          rel="noreferrer noopener"
          className="footer-link"
        >
          Github
        </a>
        <a
          href="https://deno.land/x/denostore"
          target="_blank"
          rel="noreferrer noopener"
          className="footer-link"
        >
          Deno.land
        </a>
        <a
          href="https://github.com/oslabs-beta/DenoStore"
          target="_blank"
          rel="noreferrer noopener"
          className="footer-link"
        >
          OSLabs
        </a>
        {/* TODO: ADD MEDIUM ARTICLE LINK */}
        <a
          href="https://github.com/oslabs-beta/DenoStore"
          target="_blank"
          rel="noreferrer noopener"
          className="footer-link"
        >
          Medium Article
        </a>
      </div>
    </div>
  );
};

export default Footer;
