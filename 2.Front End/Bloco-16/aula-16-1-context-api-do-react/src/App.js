// ./App.js
import './App.css';
import React from 'react';
import ColorBox from './components/ColorBox';

const value = {
  color: '',
  changeColor: () => { value.color = 'red' }
}
class App extends React.Component {
  render() {
    return (
      <ColorBox />
    );
  }
}
export default App;