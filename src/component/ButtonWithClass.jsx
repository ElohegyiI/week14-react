import React, { Component } from 'react'

class ButtonWithClass extends Component {

  constructor() {
      super()
      this.state = {
          key1: 'Click me',
          key2: 0,
          key3: 'Never click me'
      }
  }

  render() {
    return (
      <div>
        <button type='submit' onClick={() => this.setState({key1: 'You clicked me'})}>
        {this.state.key1}  
        </button> 
        <button type='submit' onClick={() => this.setState ({key2: 1})}>
        {this.state.key2}    
        </button>
        <button onClick={() => this.setState({key3: 'Mondtam'})}>
        {this.state.key3}
          </button>
        </div>
    )
  }
}
export default ButtonWithClass