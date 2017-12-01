import React, { Component } from 'react';

export default class Average extends Component {
    constructor() {
        super();

        this.state = {
            numbers: '',
            userInput: '',
            average: ''
        }
    }

    handleChange(val) { 
        this.setState({ numbers: val })
    }

    findAverage(userInput) {
            var nums = this.state.numbers;
            var numNums = nums.split(',').map(Number)
            var total = numNums.reduce((total, num) => {
                return total + num;
            }) 
            var average = total / numNums.length
            this.setState({ average: average})
    }

  render() {
    return (
    <div className="puzzleBox filterStringPB">
      <h4> Average </h4>

     <span className='puzzleText'>Numbers: { JSON.stringify(this.state.numbers, null, 10) }</span>
     <input className='inputLine' onChange={ (e) => this.handleChange(e.target.value) } ></input>
     <button className='confirmationButton' onClick={ (e) => this.findAverage(this.state.userInput) }> Sort </button>
     <span className='resultsBox filterStringRB'> Average: { JSON.stringify(this.state.average, null, 10) } </span>
    </div>
    )
  }
}