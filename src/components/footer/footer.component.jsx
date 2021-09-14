import React from 'react';
import './footer.styles.scss';

import COLORS from '../../colors';

const Footer = () => {
  return (
    <div
      className="footer-component"
      style={{
        backgroundColor: `${COLORS.superDarkGrey}`,
      }}
    >
      <span>
        mbeckdev <a>(githublink here)</a>
      </span>
    </div>
  );
};

export default Footer;
