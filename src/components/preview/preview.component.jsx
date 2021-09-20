import React from 'react';
import './preview.styles.scss';

const Preview = (props) => {
  return (
    <div className="preview">
      <p>preview stuff here</p>
      <p>title is {props.theState.personal.title}</p>
    </div>
  );
};

export default Preview;
