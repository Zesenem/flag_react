import React, { Component } from 'react'


class ClassComp extends Component {
state = {
  name:''
}
  handleChange = (e) => {
    this.setState({name: e.target.value})
  }

  render() {
    const {name} = this.state;
    return (
      <div><h1>Class</h1>
      <p>My name is:{this.state.name}</p>
      <input type="text" value={name} onChange={this.handleChange}/></div>
    )
  }
}

export default ClassComp;



