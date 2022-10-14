import React from 'react';
import MyContext from '../context/MyContext'

class Provider extends React.Component {
  state = {
    color: 'red', 
  };

  changeColor = () => {
    this.setState((prevState) => ({color: prevState.color === 'aquamarine' ? 'red' : 'aquamarine'}))
  };

  render() {
    const { children } = this.props;
    const value = {
      ...this.state,
      changeColor: this.changeColor,
    };
    return (
      <MyContext.Provider value={ value }>
        {children}
      </MyContext.Provider>
    )
  }
}

export default Provider;