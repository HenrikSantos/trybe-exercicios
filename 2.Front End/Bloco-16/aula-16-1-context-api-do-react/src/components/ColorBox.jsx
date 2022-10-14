// ./components/ColorBox.js
import React from 'react';
import '../styles/Box.css';
import MyContext from '../context/MyContext';

class ColorBox extends React.Component {
  render() {
    return(
      <MyContext.Consumer>
        {({color, changeColor}) => (
          <button
            type="button"
            className="box"
            style={ { backgroundColor: color } }
            onClick={ changeColor }
            >
            Click me to change my color!
          </button>
        )}
      </MyContext.Consumer>
    )
  }
}
export default ColorBox;