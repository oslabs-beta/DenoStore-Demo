import * as React from 'react';
import './../styles.css';


const Footer: React.FC = () => {
    return (
        <div className="footer" id= "moreLinks">
        {/* all links to the github for now */}
        <div className="footerBody" >
        <a href="https://github.com/oslabs-beta/DenoStore" target="_blank" rel="noreferrer noopener">Github</a>
        <a href="https://github.com/oslabs-beta/DenoStore" target="_blank" rel="noreferrer noopener">Deno.land</a>
        <a href="https://github.com/oslabs-beta/DenoStore" target="_blank" rel="noreferrer noopener">OSLabs</a>
        <a href="https://github.com/oslabs-beta/DenoStore" target="_blank" rel="noreferrer noopener">Medium Article</a>
        </div>
      </div>
    );
  };
  
  export default Footer;