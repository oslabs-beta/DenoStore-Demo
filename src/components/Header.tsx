import * as React from 'react';
import { Link as Route } from 'react-router-dom';
import { Link } from 'react-scroll';
import './../styles.css';

const Header: React.FC = () => {
  return (
    <div className="header">
      <ul className="headerBody">
        <li>
          <Link
            activeClass="active"
            to="main"
            spy={true}
            smooth={true}
            offset={-100}
          >
            Home
          </Link>
        </li>
        <li>
          <a href="/docs">Documentation</a>
        </li>
        <li>
          {window.innerWidth <= 600 ? (
            <Link to="demo" spy={true} smooth={true} offset={-56}>
              Demo
            </Link>
          ) : (
            <Link to="demo" spy={true} smooth={true} offset={-70}>
              Demo
            </Link>
          )}
        </li>
        <li>
          {window.innerWidth <= 600 ? (
            <Link to="team" spy={true} smooth={true} offset={-270}>
              About
            </Link>
          ) : (
            <Link to="team" spy={true} smooth={true}>
              About
            </Link>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Header;
