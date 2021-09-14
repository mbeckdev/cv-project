import React from 'react';
import './main.styles.scss';

import Preview from '../preview/preview.component';
import EntryComponent from '../entry-component/entry-component.component';

const Main = () => {
  return (
    <div className="main-component">
      <EntryComponent />
      <Preview />
    </div>
  );
};

export default Main;
