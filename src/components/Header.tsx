
import * as React from 'react';
import { Link} from 'react-scroll';
import './../styles.css';

const Header: React.FC = () => {
    return (
        <div className="header">     

        <ul className="headerBody" >
          <li><Link activeClass="active" to="home" spy={true} smooth={true}>Home</Link></li>
          <li><Link  to="demo" spy={true} smooth={true}>Demo</Link></li>
          <li><Link  to="team" spy={true} smooth={true}>Team</Link></li>
          <li><Link  to="moreLinks" spy={true} smooth={true}>More Links</Link></li>
        </ul>
          
        </div>
      
    );
  };
  
  export default Header;

