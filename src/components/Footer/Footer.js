import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="container-fluid">
        <div className="row center-sm">
          <div className="col-xs">
            <span className="Footer__footer-text">
              Created with <i className="fa fa-heart-o" /> by <a href="http://patrick-gordon.com">Patrick Gordon</a>
              <br />
              <a href="http://marvel.com\">Data provided by Marvel. © 2017 MARVEL</a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {};

export default Footer;

