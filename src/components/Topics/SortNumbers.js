import React, { Component } from 'react';

export default class SortNumbers extends Component {
    constructor() {
        super();

        this.state = {
            numbers: '',
            userInput: '',
            filteredNumbers: []
        }
    }

    handleChange(val) {
        this.setState({ numbers: val })
    }

    filteredNumbers(userInput) {
        var nums = this.state.numbers;
        var filteredNumbers = []

        var numNums = nums.split(',').map(Number)

        var sortNums = numNums.sort(function(a, b) {
            return a - b
        })

        filteredNumbers = sortNums

        this.setState({ filteredNumbers: filteredNumbers})
     
    }


  render() {
    return (
    <div className="puzzleBox filterStringPB">
     <h4> Sort Numbers </h4>
     <span className='puzzleText'>Numbers: { JSON.stringify(this.state.numbers, null, 10) }</span>
     <input className='inputLine' onChange={ (e) => this.handleChange(e.target.value) } ></input>
     <button className='confirmationButton' onClick={ (e) => this.filteredNumbers(this.state.userInput) }> Sort </button>
     <span className='resultsBox filterStringRB'> Filtered Numbers: { JSON.stringify(this.state.filteredNumbers, null, 10) } </span>
    </div>
    )
  }
}