import React from 'react'

export default class EyesOnMe extends React.Component {
  constructor(){
    super()

    this.focus = function(){
      console.log('Good!')
    }

    this.blur = function(){
      console.log('Hey! Eyes on me!')
    }
  }
  render() {
    return <button onFocus={this.focus} onBlur={this.blur}/>
  }
}
