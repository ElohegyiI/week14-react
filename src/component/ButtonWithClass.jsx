import React, { Component } from 'react'

class ButtonWithClass extends Component {

  constructor() {
      super()
      this.state = {
          key1: 'Click me',
          key2: 0,
          title: {
            main: 'maintitle',
            sub: 'subtitle'
          },
        countries: {}
      }
      console.log('1')
  }

  componentDidMount() {
    console.log('3')
    fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
        .then(countriesData => this.setState(
          () => {
            return {countries: countriesData}
          },
          () => {
            console.log(this.state)
          }
        ))
  }

  render() {
    console.log('2')
    return (
      <><div>
        <button type='submit' onClick={() => this.setState({ key1: 'You clicked me' })}>
          {this.state.key1}
        </button><button type='submit' onClick={() => {
          console.log(this.state)
          this.setState({
            title: {
              main: 'h1',
              sub: 'string'
            }
          }
          )
        } }>
          {this.state.title.main}
        </button>
        <button type='submit' onClick={() => {
          console.log(this.state)
          this.setState(

            () => {
              return {
                title: {
                  main: 'h1',
                  sub: 'string'
                }
              }

            },
            () => {

              console.log(this.state)
            }

          )
        } }>{this.state.title.main}
        </button>
      </div>
      <div className='countries'>
          {this.state.countries.map((country, index) => <div key={index}>{country.name.official}</div>)}
      </div></>
    
    )}
}
export default ButtonWithClass