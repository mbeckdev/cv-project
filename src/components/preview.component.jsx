import React from 'react';
import './preview.styles.scss';

// const Preview = (props) => {
//   // console.log(props);
//   return (
//     <div className="preview">
//       <p>preview stuff here</p>
//       <p>title is {props.theState.personal.title}</p>
//     </div>
//   );
// };

class Preview extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.props.theState;
  }

  render() {
    return (
      <div className="preview">
        <p>preview stuff here</p>
        <p>title is {this.props.theState.personal.title}</p>
      </div>
    );
  }
}

export default Preview;
