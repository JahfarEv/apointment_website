import React, { Component } from 'react'
import "./Addnew.css";

export default class AddNew extends Component {

    constructor(props) {
        super(props);
        this.state = {
            titleInput: ''
        }
    }
    handleChange = (evt)=>{
        const value = evt.target.value;
        this.setState({
            titleInput:value
        });
    }
    handleClick = ()=>{
        console.log(this.state.titleInput);
    }
  render() {
    return (
      <div className='addNew'>
        <input value={this.state.titleInput} onChange={this.handleChange} />
        <button onClick={this.handleClick}>click</button>
      </div>
    );
  }
}

