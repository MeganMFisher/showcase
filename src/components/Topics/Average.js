import React, { Component } from 'react';

export default class Average extends Component {
    constructor() {
        super();

        this.state = {
            numbers: '',
            average: 0
        }
    }

    handleChange(val) { 
        this.setState({ numbers: val })
    }

    findAverage() {
            var nums = this.state.numbers;
            var numNums = nums.split(',').map(Number)
            var total = numNums.reduce((total, num) => {
                return total + num;
            }) 
            var average = total / numNums.length
            this.setState({ average: Math.floor(average)})
    }

  render() {
    return (
    <div className="puzzleBox filterStringPB">
      <h4> Average </h4>

     <span className='puzzleText'>Numbers: {this.state.numbers}</span>
     <input className='inputLine' onChange={ (e) => this.handleChange(e.target.value) } ></input>
     <button className='confirmationButton' onClick={ (e) => this.findAverage() }> Average </button>
     <span className='resultsBox filterStringRB'> Average: { JSON.stringify(this.state.average, null, 10) } </span>
    </div>
    )
  }
}