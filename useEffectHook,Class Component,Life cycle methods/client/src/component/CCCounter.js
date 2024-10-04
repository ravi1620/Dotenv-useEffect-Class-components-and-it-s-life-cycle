import React, { Component } from 'react'

export default class CCCounter extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         score:0,
         wickets:0,
      }
    }

    componentDidMount = ()=>{
        console.log("CCCounter-ComponentDidMount");
    }

shouldComponentUpdate = ()=>{
    console.log("CCCounter-shouldComponentUpdate");
    return true;
}

    componentWillUnmount = ()=>{
        console.log("CCCounter-componentWillUnmount")
    }
  render() {
    console.log("render");
    return (
        <div className='stateDiv'>
            <h1>CCCounter</h1>
        <h1>Score:{this.state.score}</h1>
        <h1>Wickets:{this.state.wickets}</h1>
        <button
            type='button'
            onClick={() => {
                this.setState({score:this.state.score +1});
            }}
        >
            Increment Score
        </button>
        <button
            type='button'
            onClick={() => {
                this.setState({score:this.state.score -1});
            }}
        >
            Decrement Score
        </button>
        <br />
        <button
            type='button'
            onClick={() => {
                this.setState({wickets:this.state.wickets +1});
            }}
        >
            Increment Wickets
        </button>
        <button
            type='button'
            onClick={() => {
                this.setState({wickets:this.state.wickets -1});
            }}
        >
            Decrement Wickets
        </button>
    </div>
    )
  }
}
