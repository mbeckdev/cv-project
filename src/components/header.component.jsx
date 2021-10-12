import React from 'react';
import '../styles/header.styles.scss';
import COLORS from '../colors';

const Header = () => {
  return (
    <div
      className="app-header"
      style={{ backgroundColor: `${COLORS.superDarkGrey}` }}
    >
      EZ Resume Builder
    </div>
  );
};

export default Header;
